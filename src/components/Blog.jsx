import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Import the CSS file
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Footer from './Footer';

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <Navbar2/>
    <div className="blog-container">
      <h5><span style={{ marginLeft: '100px',color:'red' }}>LATEST BLOG POSTS</span></h5>
      <h2><span style={{ marginLeft: '100px' }}>Recent Insights & Stories</span></h2>
      <div className="blog-gallery">
        <div className="blog-item">
          <img src="/img/t1.jpg" alt="Blog item 1" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">20 August 2024</p>
            <h3 className="blog-title">How to Choose the Perfect Outfit</h3>
            <li><Link to="/blog/1" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        <div className="blog-item">
          <img src="/img/t2.jpg" alt="Blog item 2" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">21 August 2024</p>
            <h3 className="blog-title">The Best Accessories for Every Occasion</h3>
            <li><Link to="/blog/2" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        <div className="blog-item">
          <img src="/img/t3.jpg" alt="Blog item 3" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">22 August 2024</p>
            <h3 className="blog-title">Top Trends in Fashion for 2024</h3>
            <li><Link to="/blog/3" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        <div className="blog-item">
          <img src="/img/men4.jpg" alt="Blog item 4" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">23 August 2024</p>
            <h3 className="blog-title">Essential Skincare Tips for Every Skin Type</h3>
            <li><Link to="/blog/4" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        {/* Add more blog items as needed */}
        <div className="blog-item">
          <img src="/img/gall2.jpg" alt="Blog item 5" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">24 August 2024</p>
            <h3 className="blog-title">How to Accessorize for Any Event</h3>
            <li><Link to="/blog/5" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        <div className="blog-item">
          <img src="/img/gall3.jpg" alt="Blog item 6" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">25 August 2024</p>
            <h3 className="blog-title">DIY Fashion Projects for the Weekend</h3>
            <li><Link to="/blog/6" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        <div className="blog-item">
          <img src="/img/gall1.jpg" alt="Blog item 7" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">26 August 2024</p>
            <h3 className="blog-title">Understanding Fabric Types for Better Choices</h3>
            <li><Link to="/blog/7" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
        <div className="blog-item">
          <img src="/img/m4.png" alt="Blog item 8" className="blog-image" />
          <div className="blog-card">
            <p className="blog-date">27 August 2024</p>
            <h3 className="blog-title">The Impact of Fashion on Personal Style</h3>
            <li><Link to="/blog/8" className="blog-link">READ MORE<span className="dots">...</span></Link></li>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Blog;
