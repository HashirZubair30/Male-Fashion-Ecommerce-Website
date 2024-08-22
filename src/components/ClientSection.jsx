import React from 'react';
import './ClientSection.css';

const ClientSection = () => {
  const clientLogos = [
    'img/logo1.jpg',
    'img/logo2.jpg',
    'img/logo3.jpg',
    'img/logo4.jpg',
    'img/logo5.jpg',
    'img/logo6.jpg',
  ];

  return (
    <div className="client-container">
      <h5 className="partner-heading">Partner</h5>
      <h2 className="clients-heading">Happy Clients</h2>
      <div className="client-logos">
        {clientLogos.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt={`Client logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
