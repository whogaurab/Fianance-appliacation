// src/components/ServicesSection.jsx
import React from 'react';
import './ServicesSection.css';

const services = [
  { id: 1, title: "Money Transfer", icon: "path-to-money-transfer-icon" },
  { id: 2, title: "Withdrawal", icon: "path-to-withdrawal-icon" },
  { id: 3, title: "Bank Deposit", icon: "path-to-bank-deposit-icon" },
  { id: 4, title: "Online Payment", icon: "path-to-online-payment-icon" },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
