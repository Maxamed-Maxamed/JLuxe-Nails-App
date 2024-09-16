import React, { useState } from 'react';
import { motion } from 'framer-motion';

function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    alert('You have successfully subscribed to the JLuxe Nails newsletter!');
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="py-16 bg-pink-500 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="mb-8">Get the latest updates, promotions, and beauty tips from JLuxe Nails.</p>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <motion.input
          type="email"
          className="px-4 py-2 w-80 rounded-l-full text-gray-900"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          animate={{ scale: error ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        />
        {error && (
          <motion.div
            className="text-red-500 text-sm ml-2"
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.div>
        )}
        <motion.button
          className="px-4 py-2 bg-white text-pink-500 rounded-r-full font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          Subscribe
        </motion.button>
      </form>
    </section>
  );
}

export default NewsletterSignup;