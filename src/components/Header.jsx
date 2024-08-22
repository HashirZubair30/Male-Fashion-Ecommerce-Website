import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="container">
      <p>Free shipping, 30-day return or refund guarantee.</p>
      <nav>
        <ul>
          <li><Link to="/signin">SIGN IN</Link></li>
          <li><Link to="/faqs">FAQS</Link></li>
          <li>USD</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
