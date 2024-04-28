const multer = require("multer");
const path = require("path");
const { v4: uuid } = require("uuid");
const { ValidationError } = require("../helpers/errors");

const UPLOAD_FOLDER = path.resolve(process.env.UPLOAD_FOLDER);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_FOLDER);
  },
  filename: function (req, file, cb) {
    const filename = uuid() + "__" + file.originalname;

    // console.log(path.join(UPLOAD_FOLDER, filename));
    cb(null, filename);
    req.filepath = path.join(UPLOAD_FOLDER, filename);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image")) {
      cb(null, true);
      return;
    }

    cb(null, false);
    cb(new ValidationError("File is not an image"));
  },
});

module.exports = { upload };
