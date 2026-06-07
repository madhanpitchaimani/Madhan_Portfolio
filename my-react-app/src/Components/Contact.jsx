import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "17ebcdc9-dbe8-4dfc-83b4-6511c648d6b2", // ✅ Connected to madhanpitchaimani@gmail.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(`Thanks ${formData.name}, your message has been sent to my mail!`);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Message sending failed: " + result.message);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('An expected error occurred while sending the message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>Have a question or want to work together? Drop me a message below!</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-group">
            <textarea name="message" rows="6" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
