import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Nav/Nav';
import Home from './pages/Homepage';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/privacyAndPolicy';
import TermsAndConditions from './pages/TermsAndCondition';
import Footer from './components/Footer';

const App = () => {
  return (
    <HashRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

