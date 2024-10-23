// src/components/NewsletterSection.jsx
import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter">
      <h2>Sign Up for Newsletter</h2>
      <form className="newsletter-form">
        <input type="email" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSection;
