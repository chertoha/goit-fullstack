const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { AuthError } = require("../helpers/errors");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new AuthError("Not authorized"));
  }

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(_id);

    if (!user || token !== user.token) {
      return next(new AuthError("Not authorized"));
    }

    req.user = user;

    next();
  } catch (e) {
    next(new AuthError("Not authorized. Invalid token"));
  }
};
