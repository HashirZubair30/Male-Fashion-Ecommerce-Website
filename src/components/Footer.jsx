import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-column">
        <h2 className="logo2">Male Fashion<span className="dot">.</span></h2>
          <p>The customer is at the heart of our <br/>unique business model, which includes<br/> design.</p>
          <div className="payment-icons">
            <img src="/img/c1.png" alt="PayPal" />
            <img src="/img/c2.png" alt="Bitcoin" />
            <img src="/img/c3.png" alt="Visa" />
            <img src="/img/c4.png" alt="MasterCard" />
          </div>
        </div>
        <div className="footer-column">
          <h3>Shopping</h3>
          <ul>
            <li><Link to="/clothes">Clothing Store</Link></li>
            <li><Link to="/shoes">TrendingShoes</Link></li>
            <li><Link to="/sale">Asscessories</Link></li>
            <li><Link to="/sale">Sale</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Shopping</h3>
          <ul>
            <li><Link to="/clothes">Contact us</Link></li>
            <li><Link to="/shoes">Payment Method</Link></li>
            <li><Link to="/sale">Delivery</Link></li>
            <li><Link to="/sale">Return & Exchange</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Be the first to know about new<br/> arrivals, look books, sales & promos!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 20242020 All rights reserved | This template is made with Hashir.co</p>
      </div>
    </>
  );
};

export default Footer;
