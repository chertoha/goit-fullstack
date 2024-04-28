const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const Jimp = require("jimp");
const path = require("path");
const {
  ConflictError,
  AuthError,
  VerificationError,
  ValidationError,
  BadRequestError,
  ForbiddenError,
} = require("../helpers/errors");
const { unlink } = require("node:fs/promises");
const { v4: uuid } = require("uuid");
const PUBLIC_FOLDER = path.resolve(process.env.PUBLIC_FOLDER);

class UserService {
  async findUserByEmail(email) {
    return await User.findOne({ email });
  }

  async createUser(body) {
    if (await this.findUserByEmail(body.email)) {
      throw new ConflictError("Email in use");
    }

    const verificationToken = uuid();
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = new User({
      ...body,
      password: hashedPassword,
      avatarURL: gravatar.url(body.email, { protocol: "https" }),
      verificationToken,
    });
    return await user.save();
  }

  async loginUser(email, password) {
    const user = await this.findUserByEmail(email);

    if (!user) {
      throw new AuthError(`Not authorized. Wrong user with email: ${email}`);
    }

    if (!user.verify) {
      throw new ForbiddenError(`Email:  ${email}, is not verified yet`);
    }

    const doesPasswordMatch = await bcrypt.compare(password, user.password);
    if (!doesPasswordMatch) {
      throw new AuthError(`Not authorized. Wrong password`);
    }

    user.token = jwt.sign({ _id: user.id, email }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    const { _id, email: userEmail, subscription, token } = await user.save();
    return { _id, email: userEmail, subscription, token };
  }

  async logout(id) {
    const user = await User.findOne(id);

    if (!user) {
      throw new AuthError("Not authorized");
    }
    await User.updateOne({ _id: id }, { $unset: { token: "" } });
  }

  async updateSubscription(id, subscription) {
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        $set: { subscription },
      },
      {
        returnDocument: "after",
      }
    ).select({ email: 1, subscription: 1, _id: 0 });

    return user;
  }

  async updateAvatar(filepath, userId) {
    const [, ext] = filepath.split(".");
    const filename = userId + "." + ext;
    const avatarURL = `/avatars/${filename}`;

    const avatarPath = path.join(PUBLIC_FOLDER, avatarURL);

    const image = await Jimp.read(filepath);
    await image.resize(250, 250).writeAsync(avatarPath);

    const user = await User.findOneAndUpdate(
      { _id: userId },
      { $set: { avatarURL } },
      {
        returnDocument: "after",
      }
    ).select({ avatarURL: 1, _id: 0 });

    unlink(filepath);

    return user;
  }

  async verifyUser(verificationToken) {
    const user = await User.findOne({ verificationToken });

    if (!user) {
      throw new VerificationError("Verification error. User not found");
    }

    user.verificationToken = "null"; // ????? if null -> validation error occur
    user.verify = true;
    await user.save();
  }

  async reVerificationUser({ email }) {
    if (!email) {
      throw new ValidationError("missing required field email");
    }

    const user = await User.findOne({ email });

    if (user.verify) {
      throw new BadRequestError("Verification has already been passed");
    }

    return user;
  }
}

module.exports = new UserService();
