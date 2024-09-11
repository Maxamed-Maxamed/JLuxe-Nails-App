// src/components/Hero.js
import React from 'react';


function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-96 flex flex-col justify-center items-center"
    //    style={{ backgroundImage: 'url("https://example.com/your-image.jpg")' }}
    // style={{ backgroundImage: 'url("./assets/img/Designer.png")' }}
    style={{ backgroundImage: 'url("/assets/img/Designer.png")' }}


    >
      <h1 className="text-white text-5xl font-extrabold">Welcome to JLuxe Nails</h1>
      <p className="text-white text-xl mt-4">Luxury Nails, Makeup, and Eyelashes at Your Fingertips</p>
      <button className="mt-6 px-6 py-3 bg-white text-pink-500 font-bold rounded-full">
        Book Now
      </button>
    </section>
  );
}

export default Hero;