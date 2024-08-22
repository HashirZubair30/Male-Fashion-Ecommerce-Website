import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Navbar2.css'; // Ensure this CSS file exists and is correctly styled
import Carousel from './Carousel'; // Import the Carousel component
import Shopping from './Shopping';
import BestSeller from './BestSeller';
import Sale from './Sale';
import Gallery from './Gallery';
import Trend from './Trend';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <div className="header2">
        <h2 className="logo">Male Fashion<span className="dot">.</span></h2>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/shop" activeClassName="active">Shop</NavLink></li>
            <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
            <li><NavLink to="/aboutpage" activeClassName="active">About</NavLink></li>
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
      <Carousel />
      <br/><br/>
      <Shopping />
      <br/><br/>
      <BestSeller />
      <br/><br/>
      <Sale />
      <br/><br/>
      <Gallery />
      <br/><br/>
      <Trend />
      <br/><br/>
      <Footer/>
    </div>
  );
}

export default Home;
