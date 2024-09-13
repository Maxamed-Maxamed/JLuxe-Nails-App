// src/components/NewsletterSignup.js
import React, { useState } from 'react';

function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You have successfully subscribed to the JLuxe Nails newsletter!');
  };

  return (
    <section className="py-16 bg-pink-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-8">Get the latest updates, promotions, and beauty tips from JLuxe Nails.</p>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="email"
          className="px-4 py-2 w-80 rounded-l-full text-gray-900"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="px-4 py-2 bg-white text-pink-500 rounded-r-full font-bold">Subscribe</button>
      </form>
    </section>
  );
}

export default NewsletterSignup;