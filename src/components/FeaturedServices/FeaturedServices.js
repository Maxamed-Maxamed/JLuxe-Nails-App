// src/components/FeaturedServices.js
import React from 'react';

function FeaturedServices() {
  const services = [
    {
      title: 'Luxury Nails',
      description: 'Get the perfect nails with our premium manicure and pedicure services.',
      imageUrl: 'https://example.com/nails-feature.jpg',
    },
    {
      title: 'Professional Makeup',
      description: 'Look flawless for any occasion with our professional makeup services.',
      imageUrl: 'https://example.com/makeup-feature.jpg',
    },
    {
      title: 'Eyelash Extensions',
      description: 'Enhance your beauty with our long-lasting eyelash extensions.',
      imageUrl: 'https://example.com/eyelashes-feature.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl text-center font-bold mb-8">Featured Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-full">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedServices;
