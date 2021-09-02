require('dotenv').config();
const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.SMPT_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMPT_USER,
        pass: process.env.SMPT_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMPT_USER,
      to,
      subject: 'Activation of your MSN profile',
      text: '',
      html: `
        <div>
          <h1>Please follow the link to activate your MSN profile</h1>
          <a href="${link}" >${link}</a>
        </div>
      `,
    });
  }
}

module.exports = new MailService();
