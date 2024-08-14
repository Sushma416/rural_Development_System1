import React, { useState } from 'react';
import '../Styles/HomePage.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/contacts/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => {
      setSuccessMessage(data);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      window.alert(data); // Alert for success
      setTimeout(() => setSuccessMessage(''), 5000); // Clear success message after 5 seconds
    })
    .catch(error => {
      console.error('Error:', error);
      const errorMessage = 'There was an issue sending your message. Please try again.';
      setErrorMessage(errorMessage);
      window.alert(errorMessage); // Alert for error
      setTimeout(() => setErrorMessage(''), 5000); // Clear error message after 5 seconds
    });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="btn1">Send Message</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ContactForm;
