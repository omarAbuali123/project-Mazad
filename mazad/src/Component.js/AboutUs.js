import React from 'react';

const AboutUs = () => {
  return (
    <div className="font-sans text-gray-800 bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-6 mb-8 border-b-4 border-gray-300">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
      </header>
      <main className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          At Auction, we are committed to providing a smooth and exciting car auction experience. With a wide range of cars and an easy-to-use platform, we ensure a seamless and satisfying experience for both buyers and sellers.
        </p>
        <p className="text-lg mb-4">
          Our goal is to facilitate the process of buying and selling cars, offering a sophisticated and reliable platform to help you find the perfect car or sell your current vehicle at the best prices. We believe in providing a safe and transparent environment for our clients and pride ourselves on serving our customers with dedication and professionalism.
        </p>
        <p className="text-lg">
          Join us now and enjoy an unparalleled auction experience as we continually strive to improve our services and meet your needs with utmost dedication.
        </p>
      </main>
    </div>
  );
};

export default AboutUs;
