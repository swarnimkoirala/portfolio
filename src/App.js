// src/App.js
import React, { useState, useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import Home from './components/Home';
import SectionModal from './components/SectionModal';
import logoImage from './assets/logo.jpg';
import './App.css';


function App() {
  const [loading, setLoading] = useState(true);
  const [modalSection, setModalSection] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionId) => {
    setModalSection(sectionId);
  };

  const closeModal = () => setModalSection(null);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={logoImage} alt="Loading" className="fade-image" />
      </div>
    );
  }

  return (
    <>
      <NavbarComponent onNavClick={handleNavClick} />
      <Hero />
      <div className="container my-5">
        <Home onSectionClick={handleSectionClick} />
      </div>
      <SectionModal sectionId={modalSection} onClose={closeModal} />
    </>
  );
}

export default App;
