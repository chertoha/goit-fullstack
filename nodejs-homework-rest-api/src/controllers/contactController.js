const contactService = require("../services/ContactService");

class ContactController {
  async getAll(req, res) {
    const { page = 1, limit = 20, ...rest } = req.query;
    const skip = limit * (page - 1);
    const contacts = await contactService.getAll(
      req.user._id,
      { skip, limit },
      rest
    );
    res.status(200).json({ data: contacts, page, limit });
  }

  async getOne(req, res) {
    const contact = await contactService.getOne(
      req.params.contactId,
      req.user._id
    );
    res.status(200).json(contact);
  }

  async create(req, res) {
    const contact = await contactService.create(req.body, req.user._id);
    res.status(201).json(contact);
  }

  async update(req, res) {
    const contact = await contactService.update(
      req.params.contactId,
      req.body,
      req.user._id
    );
    res.status(200).json(contact);
  }

  async remove(req, res) {
    const contact = await contactService.remove(
      req.params.contactId,
      req.user._id
    );
    res.status(200).json(contact);
  }

  async updateStatus(req, res) {
    const contact = await contactService.updateStatus(
      req.params.contactId,
      req.body.favorite,
      req.user._id
    );
    res.status(200).json(contact);
  }
}

module.exports = new ContactController();
