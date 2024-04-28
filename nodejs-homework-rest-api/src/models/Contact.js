const { Schema, model, SchemaTypes } = require("mongoose");

const contactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    favorite: { type: Boolean, default: false },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { collection: "contacts" }
);

module.exports = model("Contact", contactSchema);
