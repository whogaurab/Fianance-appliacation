import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import Home from "./Pages/home";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import Contact from './Pages/contact';
// import ServicesSection from './components/ServicesSection';
// import AboutSection from './components/AboutSection';
// import PricingSection from './components/PricingSection';
// import NewsletterSection from './components/NewsletterSection';
// import CreateAccountSection from './components/CreateAccountSection';
// import TransactionSection from './components/TransactionSection';
// import NewsSection from './components/NewsSection';
// import Footer from './components/Footer';

const Home = () => <div>Home</div>;
const About = () => <div>About Us</div>;
const Services = () => <div>Services</div>;
const Contact = () => <div>Contact</div>;
const Pricing = () => <div>Pricing</div>;



function App() {
  return (
    <Route>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Route>

  );
}

export default App;
