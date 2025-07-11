import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import '../styles/home.css';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Home;