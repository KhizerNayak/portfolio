import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NavBar from '../components/Nav/Nav'; // Adjust path as necessary
import '../cssFold/Contact.css'; // Add CSS for Contact page if needed
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import logo from '../asset/P.png';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBack = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div>
      <header className='Header'>
        <div className="logo">
          <img src={logo} alt="My Logo" />
        </div>
        <NavBar onToggleMenu={() => {}} /> {/* Pass an empty function or handle menu toggle as needed */}
      </header>

     

      <ContactForm />
      <button className="back-button" onClick={handleBack} ><ArrowLeftCircle size={25} />
        Back to Home
      </button>
    </div>
  );
};

export default Contact;
