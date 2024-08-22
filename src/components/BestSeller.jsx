import React, { useState } from 'react';
import { bestSellers, newArrivals, hotSales } from '../data2';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './BestSellers.css';

const BestSellers = () => {
  const [activeTab, setActiveTab] = useState('bestSellers');
  const [items, setItems] = useState(bestSellers);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'newArrivals':
        setItems(newArrivals);
        break;
      case 'hotSales':
        setItems(hotSales);
        break;
      case 'bestSellers':
      default:
        setItems(bestSellers);
        break;
    }
  };

  const renderItems = (items) => {
    return items.map(item => (
      <CSSTransition
        key={item.id}
        timeout={300}
        classNames="fade"
      >
        <div className="card">
          <div className="card-image">
            <img src={item.image} alt={item.name} />
            {item.isNew && <span className="badge new">NEW</span>}
            {item.isSale && <span className="badge sale">SALE</span>}
          </div>
          <div className="card-content">
            <h3>{item.name}</h3>
            <div className="rating">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
            <p>{item.price}</p>
          </div>
        </div>
      </CSSTransition>
    ));
  };

  return (
    <div className="best-sellers">
      <div className="tabs">
        <button
          className={activeTab === 'bestSellers' ? 'active' : ''}
          onClick={() => handleTabClick('bestSellers')}
        >
          Best Sellers
        </button>
        <button
          className={activeTab === 'newArrivals' ? 'active' : ''}
          onClick={() => handleTabClick('newArrivals')}
        >
          New Arrivals
        </button>
        <button
          className={activeTab === 'hotSales' ? 'active' : ''}
          onClick={() => handleTabClick('hotSales')}
        >
          Hot Sales
        </button>
      </div>
      <TransitionGroup className="items">
        {renderItems(items)}
      </TransitionGroup>
    </div>
  );
};

export default BestSellers;
