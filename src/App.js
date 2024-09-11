import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
