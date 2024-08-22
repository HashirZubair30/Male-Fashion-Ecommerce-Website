// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="container">
      <p>Free shipping, 30-day return or refund guarantee.</p>
      <nav>
        <ul>
          <li><NavLink activeClassName="active" to="/signin">SIGN IN</NavLink></li>
          <li><NavLink activeClassName="active" to="/faqs">FAQS</NavLink></li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
