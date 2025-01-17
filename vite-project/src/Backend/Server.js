const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // Or your email service provider
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// API endpoint to send emails
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Email options
  const mailOptions = {
    from: email, // Sender's email
    to: process.env.RECEIVER_EMAIL, // Receiver's email (your email)
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
