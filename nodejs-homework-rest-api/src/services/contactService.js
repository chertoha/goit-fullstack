const { WrongParamsError } = require("../helpers/errors");
const Contact = require("../models/Contact");

class ContactService {
  async getAll(userId, { skip, limit }, queryParams) {
    const contacts = await Contact.find({ owner: userId, ...queryParams })
      .select({ __v: 0, owner: 0 })
      .skip(skip);

    if (contacts.length === 0) {
      throw new WrongParamsError("Not found data");
    }
    return contacts;
  }

  async getOne(contactId, userId) {
    const contact = await Contact.findOne({
      _id: contactId,
      owner: userId,
    }).select({ __v: 0, owner: 0 });
    if (!contact) {
      throw new WrongParamsError(`Not found with id=${contactId}`);
    }
    return contact;
  }

  async create(body, userId) {
    const { _id, name, email, phone, favorite } = await Contact.create({
      ...body,
      owner: userId,
    });
    return { _id, name, email, phone, favorite };
  }

  async update(contactId, body, userId) {
    const contact = await Contact.findOneAndUpdate(
      { _id: contactId, owner: userId },
      body,
      {
        returnDocument: "after",
      }
    ).select({ __v: 0, owner: 0 });

    if (!contact) {
      throw new WrongParamsError(`Not found with id=${contactId}`);
    }
    return contact;
  }

  async remove(contactId, userId) {
    const contact = await Contact.findOneAndRemove({
      _id: contactId,
      owner: userId,
    }).select({ __v: 0, owner: 0 });

    if (!contact) {
      throw new WrongParamsError(`Not found with id=${contactId}`);
    }
    return contact;
  }

  async updateStatus(contactId, favorite, userId) {
    const contact = await Contact.findOneAndUpdate(
      { _id: contactId, owner: userId },
      {
        $set: { favorite },
      },
      {
        returnDocument: "after",
      }
    );

    if (!contact) {
      throw new WrongParamsError(`Not found with id=${contactId}`);
    }
    return contact;
  }
}

module.exports = new ContactService();
