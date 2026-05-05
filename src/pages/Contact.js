import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssFold/Contact.css';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='contact-page' style={{ marginTop: '60px' }}>
      <ContactForm />
      <button className="back-button" onClick={handleBack} ><ArrowLeftCircle size={25} />
        Back to Home
      </button>
    </div>
  );
};

export default Contact;
