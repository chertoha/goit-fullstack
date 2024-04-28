const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SEND_GRID_TOKEN);

class EmailService {
  async sendVerificationEmail(email, link) {
    const msg = {
      to: email,
      from: "chertoha@ukr.net", // Change to your verified sender
      subject: "Verification email",
      text: `Verification link: ${link}`,
      html: `<strong>Verification link: <a>${link}</a></strong>`,
    };

    await sgMail.send(msg);
  }
}

module.exports = new EmailService();
