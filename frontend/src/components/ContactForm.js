import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../cssFold/ContactForm.css'; // Ensure this path matches your folder structure

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    designation: '',
    contactDetails: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: formData.email,
      company_name: formData.companyName,
      designation: formData.designation,
      contact_details: formData.contactDetails,
    };

    emailjs.send('service_swlzz1i', 'template_ukx5jcq', templateParams, 'D1nw8M_bqALSvho2d')
      .then(response => {
        setStatusMessage('Email sent successfully');
      })
      .catch(error => {
        setStatusMessage('Error sending email');
      });
  };

  return (
    <div className="contact-form-container">
      <div className="form-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Company Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="companyName">Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactDetails">Details:</label>
            <textarea
              id="contactDetails"
              name="contactDetails"
              value={formData.contactDetails}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
