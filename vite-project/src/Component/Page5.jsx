import React, { useState } from 'react';
import '../styles/Page5.css'; // Import your existing CSS styles
import { Button } from "@/components/ui/button"
function Page5() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="contact-page" id="Contact">
      {/* Page Heading */}
      <div className="contact-header">
        <h1 className="contact-heading">Contact Us</h1>
        <h3>Get in Touch</h3>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {/* <button type="submit">Send Mail</button> */}
        <Button variant="ghost">Send Mail</Button>

      </form>
    </div>
  );
}

export default Page5;
