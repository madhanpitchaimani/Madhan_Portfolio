import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // or '@emailjs/browser'
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_dxm1r3k',          // ✅ no trailing space
      'template_d2giup9',
      formData,
      'HM4aT6gji5lGPLzdz'
    )
    .then(() => {
      alert(`Thanks ${formData.name}, your message has been sent to my mail!`);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Message sending failed. Try again later.');
    });
  };

  return (
    <div className="contact-page" id="contact">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
        <textarea name="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
