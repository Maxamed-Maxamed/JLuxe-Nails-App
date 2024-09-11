// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';

function App() {
  return (
    <div className="App">
       <Header />
       {/* <h1 className="text-4xl text-center mt-10">Welcome to JLuxe Nails</h1> */}
       <Hero />
       
      
    </div>
  );
}

export default App;
