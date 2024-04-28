const EmailService = require("../services/EmailService");
const userService = require("../services/UserService");

class UserController {
  async registration(req, res) {
    const user = await userService.createUser(req.body);

    const verificationLink =
      `http://localhost:${process.env.API_SERVER_PORT}` +
      req.baseUrl +
      "/" +
      `verify/${user.verificationToken}`;
    await EmailService.sendVerificationEmail(user.email, verificationLink);

    const { _id, email, subscription, avatarURL } = user;
    res.status(201).json({ _id, email, subscription, avatarURL });
  }

  async login(req, res) {
    const user = await userService.loginUser(req.body.email, req.body.password);
    res.status(200).json(user);
  }

  async current(req, res) {
    // const user = await userService.current(req.user._id);
    const { _id, email, subscription } = req.user;
    res.status(200).json({ _id, email, subscription });
  }

  async logout(req, res) {
    await userService.logout(req.user._id);
    res.status(204).json();
  }

  async updateSubscription(req, res) {
    const user = await userService.updateSubscription(
      req.user._id,
      req.body.subscription
    );

    res.status(200).json(user);
  }

  async updateAvatar(req, res) {
    const user = await userService.updateAvatar(req.filepath, req.user._id);
    res.status(200).json(user);
  }

  async verifyUser(req, res) {
    if (req.params.verificationToken) {
      await userService.verifyUser(req.params.verificationToken);
      return res.status(200).json({ message: "Verification successful" });
    }

    const user = await userService.reVerificationUser(req.body);

    const verificationLink =
      req.baseUrl + "/" + `verify/:${user.verificationToken}`;
    await EmailService.sendVerificationEmail(user.email, verificationLink);

    res.status(200).json({
      message: "Verification email sent",
    });
  }
}

module.exports = new UserController();
