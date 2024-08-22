import React from 'react';
import { Link } from 'react-router-dom';
import './Shopping.css';

function Shopping() {
  return (
    <div className="shopping">
      <div className="item clothes">
        <div className="text">
          <h3>Clothing <br />Collections 2025</h3>
          <li><Link to="/shop">SHOP NOW</Link></li>
        </div>
        <img src="/img/cloth.png" alt="Clothes" />
      </div>

      <div className="item accessories">
        <div className="text">
          <h3>Accessories</h3>
          <li><Link to="/shop">SHOP NOW</Link></li>
        </div>
        <img src="/img/access.png" alt="Accessories" />
      </div>

      <div className="item shoes">
        <div className="text">
          <h3>Shoes Spring<br /> 2025</h3>
          <li><Link to="/shop">SHOP NOW</Link></li>
        </div>
        <img src="/img/shoes.png" alt="Shoes" />
      </div>
    </div>
  );
}

export default Shopping;
