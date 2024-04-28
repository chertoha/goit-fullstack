const express = require("express");
const router = express.Router();
const {
  getAll,
  getOne,
  create,
  remove,
  update,
  updateStatus,
} = require("../controllers/ContactController");
const { asyncWrapper } = require("../helpers/apiHelpers");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  contactValidation,
  favoriteValidation,
} = require("../middlewares/validationMiddleware");

router.use(authMiddleware);

router.get("/", asyncWrapper(getAll));
router.get("/:contactId", asyncWrapper(getOne));
router.post("/", contactValidation, asyncWrapper(create));
router.put("/:contactId", contactValidation, asyncWrapper(update));
router.delete("/:contactId", asyncWrapper(remove));
router.patch(
  "/:contactId/favorite",
  favoriteValidation,
  asyncWrapper(updateStatus)
);

module.exports = router;
