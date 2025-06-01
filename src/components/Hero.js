import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Background image
import laptopIcon from '../assets/profile-image.jpg'; // Your custom icon image

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#c9d1d9',
        textAlign: 'center',
        paddingTop: '70px',
        position: 'relative',
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1,
        }}
      ></div>

      {/* Hero content */}
      <div style={{ zIndex: 2 }}>
        <img
          src={laptopIcon}
          alt="Laptop icon"
          style={{ width: '200px', marginBottom: '20px' }}
        />
        <h1 className="display-3 fw-bold mb-3">Swarnim Abiral Koirala</h1>
        <p className="lead mb-4" style={{ maxWidth: '600px' }}>
          Graduate in Bachelor of Information Technology | Software Developer | Cloud Enthusiast | Problem Solver
        </p>
        <a
          href="#career-objective"
          className="btn btn-outline-primary btn-lg"
          style={{ color: '#c9d1d9', borderColor: '#c9d1d9' }}
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
