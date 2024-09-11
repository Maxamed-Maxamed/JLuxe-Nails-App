// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
       <Header />
       <Switch> 
       <Route path="/" exact component={Hero} />
       <Route path="/services" component={Services} />
       <Route path="/contact" component={Contact} />

       </Switch>
       <Hero />
       <Footer />
    </div>
    </Router>
  );
}

export default App;
