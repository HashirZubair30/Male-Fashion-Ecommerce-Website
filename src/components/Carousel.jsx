import React, { useState } from 'react';
import { carouselData } from '../data';
import { FaArrowLeft, FaArrowRight,FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import './Carousel.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
  };

  const { title, subtitle, description, buttonText, image } = carouselData[currentIndex];

  return (
    <div className="carousel">
      <FaArrowLeft className="arrow left-arrow" onClick={prevSlide} />
      <div className="carousel-content">
        <div className="carousel-text">
          <h3>{subtitle}</h3>
          <h1>{title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}</h1>
          {/* Add line breaks in description */}
          <p>{description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}</p>
          <button>{buttonText}</button>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
        </div>
        <div className="carousel-image">
          <img src={image} alt={title} />
        </div>
      </div>
      <FaArrowRight className="arrow right-arrow" onClick={nextSlide} />
    </div>
  );
}

export default Carousel;
