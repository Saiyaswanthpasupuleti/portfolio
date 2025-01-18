import React, { useState } from 'react';
import '../styles/Page5.css'; // Import your existing CSS styles
import { Toaster, toast } from 'sonner'; // Import the correct API for toaster notifications
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function Page5() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false); // State for tracking email sending progress
  const [progressValue, setProgressValue] = useState(0); // State for progress bar value

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setProgressValue(0); // Reset progress

    // Simulate dynamic progress
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 80) {
          clearInterval(interval);
          return 80; // Stop at 80% while waiting for the API response
        }
        return prev + 10;
      });
    }, 500);

    try {
      const response = await fetch('https://portfolio-1-btiu.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setProgressValue(100); // Complete the progress bar
      } else {
        toast.error('Failed to send email. Please try again later.');
        setProgressValue(0); // Reset progress
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
      setProgressValue(0); // Reset progress
    } finally {
      setTimeout(() => setIsSending(false), 500); // Hide progress bar after a short delay
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
        <Button type="submit" variant="ghost" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Mail'}
        </Button>
      </form>

      {/* Progress Bar */}
      {isSending && (
        <div className="progress-bar">
          <Progress value={progressValue} />
        </div>
      )}

      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
}

export default Page5;
