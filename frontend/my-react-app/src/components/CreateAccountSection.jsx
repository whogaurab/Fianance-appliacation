// src/components/CreateAccountSection.jsx
import React from 'react';
import './CreateAccountSection.css';

const CreateAccountSection = () => {
  return (
    <section className="create-account">
      <h2>Create an Account</h2>
      <form className="create-account-form">
        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Email" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreateAccountSection;
