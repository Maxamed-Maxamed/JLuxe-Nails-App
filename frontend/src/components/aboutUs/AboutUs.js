// src/components/AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About JLuxe Nails</h2>
        <p className="text-lg leading-relaxed mb-8">
          At JLuxe Nails, we believe that beauty is more than skin deep. Our mission is to provide luxury beauty services 
          that enhance your natural beauty and make you feel confident inside and out. From nails and makeup to eyelashes, 
          we offer a full range of services to help you look and feel your best.
        </p>
        <p className="text-lg leading-relaxed">
          Our highly trained team uses only the best products and techniques to ensure that every service is perfect. 
          Whether you’re preparing for a special occasion or just want to pamper yourself, we’re here to help.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;