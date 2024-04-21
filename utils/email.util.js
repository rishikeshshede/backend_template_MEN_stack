const nodemailer = require("nodemailer");
require("dotenv").config();

const generateRandomCode = require("./codeGenerator.util");

module.exports = {
  // Send OTP through NodeMailer
  sendOTPMail: async ({ to }) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const subject = "OTP for Hirewire Verification";
    const otp = generateRandomCode();
    const body = `Hey! Your OTP for Hirewire is ${otp}.`;

    const mailOptions = {
      from: process.env.MAIL_ID,
      to: to,
      subject: subject,
      text: body,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          reject(error);
        } else {
          resolve(info);
        }
      });
    });
  },
};
