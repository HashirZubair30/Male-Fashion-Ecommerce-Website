// Navbar2.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Navbar2.css'; // Ensure this CSS file exists and is correctly styled

const Navbar2 = () => {
  return (
    <div className="header2">
      <h2 className="logo">Male Fashion<span className="dot">.</span></h2>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
          <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
          <li><NavLink to="/aboutPage" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
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

export default Navbar2;
