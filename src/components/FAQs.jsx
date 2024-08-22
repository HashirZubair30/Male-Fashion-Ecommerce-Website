import React, { useState } from 'react';
import './FAQs.css'; // Import the CSS file for styling

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the return policy?',
      answer: 'Our return policy allows you to return products within 30 days of receipt. Please ensure that items are in their original condition and packaging.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order has shipped, you will receive a tracking number via email. You can use this number to track your order on our website.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times vary based on the destination.'
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can contact our customer service team via email at support@example.com or by calling 1-800-123-4567.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. All payment methods are secure and encrypted.'
    }
  ];

  return (
    <div className="faqs-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-toggle">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
