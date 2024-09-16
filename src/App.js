import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import FeaturedServices from './components/FeaturedServices/FeaturedServices';
import Testimonials from './components/Testimonials/Testimonials';
import AboutUs from './components/aboutUs/AboutUs';
import NewsletterSignup from './components/NewsLetter/NewsletterSignup';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="featured-services">
        <FeaturedServices />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;