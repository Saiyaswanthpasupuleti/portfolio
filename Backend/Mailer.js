
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cors=require("cors")
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Configuration using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'saiyaswanths959@gmail.com',
    pass: 'ijzk yhym hfes nyvj', 
  },
});

// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,
    to: 'saiyaswanths959@gmail.com', // The recipient's email
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
});

// Start the server
app.listen(3600, () => {
  console.log(`Server is running `);
});
