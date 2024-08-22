import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Header2.css';

function Header2() {
  return (
    <div className="header2">
      <h2 className="logo">Male Fashion<span className="dot">.</span></h2>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/aboutpage">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="icons">
        <FaSearch className="icon" />
        <FaHeart className="icon" />
        <div className="cart">
          <FaShoppingCart className="icon" />
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
}

export default Header2;
