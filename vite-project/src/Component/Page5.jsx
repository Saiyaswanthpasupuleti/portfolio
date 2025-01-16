import React, { useState } from 'react';
import '../styles/Page5.css'; // Import a CSS file for styling
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Page5() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className="contact-page">
      {/* Page Heading */}
      <div className="contact-header">
        <h1 className="contact-heading">Contact Us</h1>
        <h3>Get in Touch</h3>
        {/* <p>
          We're here to help! Feel free to reach out with any questions or inquiries.
          We aim to respond within 24 hours.
        </p> */}
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <Input type="email"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />

          
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <Input type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <Textarea id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required/>

         
        </div>
       

        <Button variant="ghost">Send Mail</Button>

      </form>
    </div>
  );
}

export default Page5;
