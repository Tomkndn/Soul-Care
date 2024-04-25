// Importing nodemailer module
const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS
  },
  tls: {
      rejectUnauthorized: false // If your SMTP server uses a self-signed certificate, set this option to false
  }
});

// Setting up email data
function sendEmail(sender_address,subject_of_mail,main_text) {
  const mailOptions = {
    from: 'mahakalyogesh@gmail.com',
    to: sender_address,
    subject: subject_of_mail,
    text: main_text,
  }
  
  // Sending the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Error occurred:', error);
    }
    console.log('Email sent:', info.response);
  });
};

module.exports = sendEmail;