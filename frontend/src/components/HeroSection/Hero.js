// import React from 'react';


// function Hero() {
//   return (
//     <section
//       id="home"
//       // className="bg-cover bg-center h-96 flex flex-col justify-center items-center"
//        className="bg-cover bg-center h-screen flex flex-col justify-end items-center pb-32"
//       style={{ 
//         backgroundImage: 'url("/img/logo.png")', 
//         // backgroundColor: 'red',
//         backgroundSize: '450px',
//         // backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//        }}
//     >
//       <h1 className="text-red-500 text-5xl font-extrabold mt-20">Welcome to JLuxe Nails</h1> 
//       <p className="text-red-500 text-xl mt-6">Luxury Nails, Makeup, and Eyelashes at Your Fingertips</p> 
//       <button className="mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded-full">
//         Book Now
//       </button> 
//     </section>
//   );
// }

// export default Hero;

// import React from 'react';

// function Hero() {
//   return (
//     <section
//       id="home"
//       className="bg-cover bg-center h-screen flex flex-col justify-end items-center pb-32"
//       style={{ 
//         backgroundImage: 'url("/img/logo.png")', 
//         backgroundSize: '550px',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
      

      
//       <button className="mt-10 px-6 py-3 bg-red-500 text-white font-bold rounded-full">
//         Book Now
//       </button> 
//     </section>
//   );
// }

// export default Hero;


function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-top h-screen flex flex-col justify-between items-center"
      style={{
        backgroundImage: 'url("/img/logo.png")',
        backgroundSize: '550px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* <div className="flex-grow"></div>
      <button className="mb-15 px-6 py-3 bg-red-500 text-white font-bold rounded-full">
        Book Now
      </button> */}

<button className="absolute bottom-9 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-red-500 text-white font-bold rounded-full">
        Book Now
      </button>
    </section>
  );
}

export default Hero;
