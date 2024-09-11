// // src/components/Hero.js
// import React from 'react';


// function Hero() {
//   return (
//     <section
//       id="home"
//       className="bg-cover bg-center h-96 flex flex-col justify-center items-center"
//        style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/027/141/905/non_2x/ai-generated-bengal-tiger-images-in-various-motions-transparent-background-free-png.png")' }}
       
//     // style={{ backgroundImage: 'url("./assets/img/Designer.png")' }}
//     // style={{ backgroundImage: 'url("/assets/img/Designer.png")' }}


//     >
//       <h1 className="text-white text-5xl font-extrabold">Welcome to JLuxe Nails</h1>
//       <p className="text-white text-xl mt-4">Luxury Nails, Makeup, and Eyelashes at Your Fingertips</p>
//       <button className="mt-6 px-6 py-3 bg-white text-pink-500 font-bold rounded-full">
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
//       className="bg-cover bg-center h-96 flex flex-col justify-center items-center"
//       style={{ backgroundImage: 'url("./img/logo.png")' }}
//     >
//       <h1 className="text-white text-5xl font-extrabold">Welcome to JLuxe Nails</h1>
//       <p className="text-white text-xl mt-4">Luxury Nails, Makeup, and Eyelashes at Your Fingertips</p>
//       <button className="mt-6 px-6 py-3 bg-white text-pink-500 font-bold rounded-full">
//         Book Now
//       </button>
//     </section>
//   );
// }

// export default Hero;

// // function Hero() {
// //   return (
// //     <section
// //       id="home"
// //       className="bg-cover bg-center h-96 flex flex-col justify-center items-center"
// //       style={{ backgroundImage: 'url("./img/logo.svg")' }}
// //     >
// //       <h1 className="text-white text-5xl font-extrabold">Welcome to JLuxe Nails</h1>
// //       <p className="text-white text-xl mt-4">Luxury Nails, Makeup, and Eyelashes at Your Fingertips</p>
// //       <button className="mt-6 px-6 py-3 bg-white text-pink-500 font-bold rounded-full">
// //         Book Now
// //       </button>
// //     </section>
// //   );
// // }

// // export default Hero;






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