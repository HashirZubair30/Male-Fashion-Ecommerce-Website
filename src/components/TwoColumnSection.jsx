import React from 'react';
import './TwoColumnSection.css';

const TwoColumnSection = () => {
  return (
    <div className="two-column-container">
      <div className="right-image">
        <img src="/img/hicking.jpg" alt="Hiking" />
      </div>
      <div className="left-content">
        <p>“Going out after work? Take your butane curling iron with you to the<br/> office, heat it up, style your hair before you leave the office and you won’t<br/> have to make a trip back home.”</p>
        <h4>Augusta Schultz</h4>
        <p>Fashion Design</p>
      </div>
    </div>
  );
}

export default TwoColumnSection;
