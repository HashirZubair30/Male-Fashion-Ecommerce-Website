import React, { useState, useEffect } from 'react';
import './Sale.css'; // Import the CSS file

const Sale = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-27") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = value => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="sale-container">
      <div className="left-section">
      <h2><span style={{ color: 'rgba(181, 182, 186, 255)' }}>Clothing Hot</span></h2>
      <h2><span style={{ color: 'rgba(12,22,23,255)' }}>Hot Sale</span></h2>
        <h2><span style={{ color: 'rgba(181, 182, 186, 255)' }}>Shoe Collection</span></h2>
      </div>
      <div className="center-section">
        <img src="/img/bag.jpg" alt="Sale Bag" className="sale-image" />
      </div>
      <div className="right-section">
        <h2>DEAL OF THE WEEK</h2>
        <h3>Multi-pocket Chest Bag Black</h3>
        <div className="countdown">
          <div className="countdown-item">
            <span>{addLeadingZero(timeLeft.days)}</span>
            <span>Days</span>
          </div>
          <div className="countdown-item">
            <span>{addLeadingZero(timeLeft.hours)}</span>
            <span>Hours</span>
          </div>
          <div className="countdown-item">
            <span>{addLeadingZero(timeLeft.minutes)}</span>
            <span>Minutes</span>
          </div>
          <div className="countdown-item">
            <span>{addLeadingZero(timeLeft.seconds)}</span>
            <span>Seconds</span>
          </div>
        </div>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Sale;
