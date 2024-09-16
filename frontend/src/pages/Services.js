// src/pages/Services.js
import React from 'react';

function Services() {
  const services = [
    {
      title: 'Manicure & Pedicure',
      description: 'Luxurious treatments for your nails.',
      price: '$50',
      imageUrl: 'https://example.com/nails-image.jpg',
    },
    {
      title: 'Makeup',
      description: 'Flawless makeup for any occasion.',
      price: '$80',
      imageUrl: 'https://example.com/makeup-image.jpg',
    },
    {
      title: 'Eyelashes',
      description: 'Beautiful, long-lasting eyelashes.',
      price: '$40',
      imageUrl: 'https://example.com/eyelashes-image.jpg',
    },
  ];

  return (
    <section className="py-16 px-8">
      <h1 className="text-4xl text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-2xl font-bold mt-4">{service.title}</h2>
            <p className="mt-2">{service.description}</p>
            <p className="mt-4 text-pink-500 font-bold">{service.price}</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;