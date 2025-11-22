"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-50">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} // replace with your image
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
          Welcome to E-Shop
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-100 drop-shadow-md">
          Discover the best products at unbeatable prices. Shop now and enjoy amazing deals!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
