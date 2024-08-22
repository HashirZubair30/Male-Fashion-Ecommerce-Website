import React from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import './AboutPage.css'; // Make sure to create and style this CSS file
import TwoColumnSection from './TwoColumnSection';
import TeamSection from './TeamSection';
import ClientSection from './ClientSection';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className="about-container">
        <img src="/img/clothes.jpg" alt="Clothes" className="about-image" />
        <div className="about-text-container">
          <div className="about-text">
            <h3>Who We Are?</h3>
            <p>Contextual advertising programs sometimes have strict policies that need to be adhered to. Let’s take Google as an example.</p>
          </div>
          <div className="about-text">
            <h3>What We Do?</h3>
            <p>In this digital generation where information can be easily obtained within seconds, business cards still have retained their importance.</p>
          </div>
          <div className="about-text">
            <h3>Why Choose Us?</h3>
            <p>A two or three storey house is the ideal way to maximize the piece of earth on which our home sits, but for older or infirm people.</p>
          </div>
        </div>
      </div>
      <TwoColumnSection/>
      <br/>
      <TeamSection/>
      <br/>
      <ClientSection/>
      <br/>
      <Footer/>
    </div>
  );
};

export default AboutPage;

