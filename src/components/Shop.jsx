import React, { useState } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import './Shop.css';
import Footer from './Footer';

const Shop = () => {
  const [dropdowns, setDropdowns] = useState({
    categories: false,
    branding: false,
    price: false,
    size: false,
    colors: false,
    tags: false,
  });

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="shop-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          {Object.keys(dropdowns).map((section) => (
            <div className="filter-section" key={section}>
              <h3 onClick={() => toggleDropdown(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className={`dropdown-icon ${dropdowns[section] ? 'open' : ''}`}>
                  {dropdowns[section] ? 'v' : '^'}
                </span>
              </h3>
              {dropdowns[section] && (
                <ul>
                  {section === 'categories' && (
                    <>
                      <li>Men (20)</li>
                      <li>Women (20)</li>
                      <li>Bags (20)</li>
                      <li>Clothing (20)</li>
                      <li>Shoes (20)</li>
                      <li>Accessories (20)</li>
                      <li>Kids (20)</li>
                    </>
                  )}
                  {section === 'branding' && (
                    <>
                      <li>Louis Vuitton</li>
                      <li>Chanel</li>
                      <li>Hermes</li>
                      <li>Gucci</li>
                    </>
                  )}
                  {section === 'price' && (
                    <>
                      <li>$0.00 - $50.00</li>
                      <li>$50.00 - $100.00</li>
                      <li>$100.00 - $150.00</li>
                      <li>$150.00 - $200.00</li>
                      <li>$200.00 - $250.00</li>
                      <li>$250.00+</li>
                    </>
                  )}
                  {section === 'size' && (
                    <>
                      <li>XS</li>
                      <li>S</li>
                      <li>M</li>
                      <li>XL</li>
                      <li>2XL</li>
                      <li>XXL</li>
                      <li>3XL</li>
                      <li>4XL</li>
                    </>
                  )}
                  {section === 'colors' && (
                    <ul className="colors-list">
                      <li className="color-box" style={{ backgroundColor: "#ff0000" }}></li>
                      <li className="color-box" style={{ backgroundColor: "#00ff00" }}></li>
                      <li className="color-box" style={{ backgroundColor: "#0000ff" }}></li>
                      <li className="color-box" style={{ backgroundColor: "#ffff00" }}></li>
                    </ul>
                  )}
                  {section === 'tags' && (
                    <>
                      <li>Product</li>
                      <li>Bags</li>
                      <li>Shoes</li>
                      <li>Fashion</li>
                      <li>Clothing</li>
                      <li>Hats</li>
                      <li>Accessories</li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Sidebar - Products */}
        <div className="products-container">
          <div className="product-grid">
            {Array.from({ length: 10 }).map((_, index) => {
              const randomRating = Math.floor(Math.random() * 5) + 1; // Random rating between 1-5
              return (
                <div className="product-card" key={index}>
                  <img src={`/img/p${index + 1}.jpg`} alt={`Product ${index + 1}`} className="product-image"/>
                  <div className="product-info">
                    <h4>Product {index + 1}</h4>
                    <p>{'⭐'.repeat(randomRating)}</p>
                    <span>$99.99</span>
                  </div>
                  <div className="hover-overlay">
                    <button>Add to Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Pagination */}
          <div className="pagination">
            <button>&laquo; Prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Next &raquo;</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Shop;
