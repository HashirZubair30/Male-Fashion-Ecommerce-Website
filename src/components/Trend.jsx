import React from 'react';
import { Link } from 'react-router-dom';
import './Trend.css'; // Import the CSS file

const Trend = () => {
  return (
    <div className="trend-container">
        <p><span style={{ marginLeft: '500px' }}>LATEST NEWS</span></p>
        <h2 ><span style={{ marginLeft: '440px' }}>Fashion New Trends</span></h2>
      <div className="trend-gallery">
        <div className="trend-item">
          <img src="/img/t1.jpg" alt="Trend item 1" className="trend-image" />
          <div className="trend-card">
            <p className="trend-date">13 February 2020</p>
            <h3 className="trend-title">What Curling Irons Are Best</h3>
           <li><Link to="/blog">READ MORE</Link></li>
          </div>
        </div>
        <div className="trend-item">
          <img src="/img/t2.jpg" alt="Trend item 2" className="trend-image" />
          <div className="trend-card">
            <p className="trend-date">14 February 2020</p>
            <h3 className="trend-title">Eternity Bands Last Forever</h3>
           <li><Link to="/blog">READ MORE</Link></li>
          </div>
        </div>
        <div className="trend-item">
          <img src="/img/t3.jpg" alt="Trend item 3" className="trend-image" />
          <div className="trend-card">
            <p className="trend-date">15 February 2020</p>
            <h3 className="trend-title">Health Benefits Sunglasses</h3>
           <li><Link to="/blog">READ MORE</Link></li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
