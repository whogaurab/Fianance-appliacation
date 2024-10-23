import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import NewsletterSection from './components/NewsletterSection';
import CreateAccountSection from './components/CreateAccountSection';
import TransactionSection from './components/TransactionSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <ServicesSection /> */}
      <AboutSection />
      <PricingSection />
      <NewsletterSection />
      <CreateAccountSection />
      <TransactionSection />
      <NewsSection />
      <Footer />
    </>
  );
}

export default App;
