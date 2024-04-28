const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../helpers/apiHelpers");
const {
  userValidation,
  userSubscriptionValidation,
} = require("../middlewares/validationMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

const {
  registration,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatar,
  verifyUser,
} = require("../controllers/UserController");
const { upload: uploadImage } = require("../middlewares/uploadImageMiddleware");

router.post("/register", userValidation, asyncWrapper(registration));
router.post("/login", userValidation, asyncWrapper(login));
router.get("/current", authMiddleware, asyncWrapper(current));
router.post("/logout", authMiddleware, asyncWrapper(logout));
router.patch(
  "/",
  [authMiddleware, userSubscriptionValidation],
  asyncWrapper(updateSubscription)
);
router.patch(
  "/avatars",
  [authMiddleware, uploadImage.single("avatar")],
  asyncWrapper(updateAvatar)
);
router.post("/verify", asyncWrapper(verifyUser));
router.get("/verify/:verificationToken", asyncWrapper(verifyUser));

module.exports = router;
