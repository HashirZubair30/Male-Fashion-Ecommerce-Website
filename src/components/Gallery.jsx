import React from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery">
        <img src="/img/gall1.jpg" alt="Fashion item 1" className="gallery-image" />
        <img src="/img/gall2.jpg" alt="Fashion item 2" className="gallery-image" />
        <img src="/img/gall3.jpg" alt="Fashion item 3" className="gallery-image" />
        <img src="/img/gall4.jpg" alt="Fashion item 4" className="gallery-image" />
        <img src="/img/gall5.jpg" alt="Fashion item 5" className="gallery-image" />
        <img src="/img/gall6.jpg" alt="Fashion item 6" className="gallery-image" />
      </div>
      <div className="gallery-caption">
        <h2>Instagram</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore et<br/> dolore magna aliqua.</p>
        <h2><span style={{ color: 'red' }}>#Male_Fashion</span></h2>
      </div>
    </div>
  );
};

export default Gallery;
