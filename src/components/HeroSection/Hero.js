import React from 'react';


function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-96 flex flex-col justify-center items-center"
      style={{ 
        backgroundImage: 'url("/img/logo.png")', 
        // backgroundColor: 'red',
        backgroundSize: '900px',
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       }}
    >
      <h1 className="text-red-500 text-5xl font-extrabold mt-20">Welcome to JLuxe Nails</h1> 
      <p className="text-red-500 text-xl mt-6">Luxury Nails, Makeup, and Eyelashes at Your Fingertips</p> 
      <button className="mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded-full">
        Book Now
      </button> 
    </section>
  );
}

export default Hero;