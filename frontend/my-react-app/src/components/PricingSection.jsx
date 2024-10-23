// src/components/PricingSection.jsx
import React from 'react';
import './PricingSection.css';

const plans = [
  { id: 1, name: 'Basic', rate: '8.50%', duration: 'For 1 Year', description: 'Suitable for individuals' },
  { id: 2, name: 'Premium', rate: '8.50%', duration: 'For 2 Years', description: 'Best for businesses' },
  { id: 3, name: 'Advance', rate: '8.50%', duration: 'For 5 Years', description: 'Ideal for large investments' },
];

const PricingSection = () => {
  return (
    <section className="pricing">
      <h2>Grab Our Mega Deposit Package</h2>
      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.id} className="pricing-card">
            <h3>{plan.name}</h3>
            <p>{plan.rate}</p>
            <p>{plan.duration}</p>
            <p>{plan.description}</p>
            <button className="pricing-button">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
