"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaShoppingBag } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 mt-20">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaShoppingBag size={28} className="text-white" />
              <h2 className="text-2xl font-semibold text-white">E-Shop</h2>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted marketplace for cars, bikes & bicycles.  
              Fast delivery, secure payment, and verified sellers.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/offers" className="hover:text-white">Offers</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-white">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/returns" className="hover:text-white">Return Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Social Icons */}
          <div className="flex gap-5 mb-4 md:mb-0">
            <Link href="#" className="hover:text-white"><FaFacebookF size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaInstagram size={20} /></Link>
            <Link href="#" className="hover:text-white"><FaTwitter size={20} /></Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} E-Shop. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
