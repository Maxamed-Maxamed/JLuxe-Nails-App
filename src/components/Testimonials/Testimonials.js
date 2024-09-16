// src/components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah J.',
      feedback: 'JLuxe Nails gave me the best manicure I’ve ever had! The staff is so professional and friendly.',
      imageUrl: 'https://example.com/client1.jpg',
    },
    {
      name: 'Emily R.',
      feedback: 'Amazing makeup artists! I looked stunning for my wedding thanks to JLuxe Nails.',
      imageUrl: 'https://example.com/client2.jpg',
    },
    {
      name: 'Jessica P.',
      feedback: 'The eyelash extensions I got here are perfect and lasted a long time. I highly recommend JLuxe!',
      imageUrl: 'https://example.com/client3.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl text-center font-bold mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {testimonials.map((testimonial, index) => (

          <motion.div
          key={testimonial.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            className="bg-gray-100 p-6 rounded-lg shadow-lg"

          
          
          > 


          


          <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="mt-2 italic">"{testimonial.feedback}"</p>
          </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}

export default Testimonials;