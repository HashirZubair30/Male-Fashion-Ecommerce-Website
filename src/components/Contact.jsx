import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import './Contact.css'; // Make sure to create and include this CSS file
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="contact-container">
        {/* Left Side - Contact Information */}
        <div className="contact-info">
          <h3>Information</h3>
          <h1>Contact Us</h1>
          <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
          <h1>America</h1>
          <p>195 E Parker Square Dr, Parker, CO 801<br/>+43 982-314-0958</p>
          <h1>France</h1>
          <p>109 Avenue Léon, 63 Clermont-Ferrand<br/>+12 345-423-9893</p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
