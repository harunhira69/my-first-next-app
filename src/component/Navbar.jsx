"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiUser, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600 cursor-pointer">
                <FiShoppingCart className="inline mr-1" />
                E-Shop
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/products" className="hover:text-blue-600">Shop</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200"
              >
                <FiUser />
                <span>User Menu</span>
                <FiChevronDown />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                  <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <FiUser className="mr-2" /> Add Product
                  </Link>
                  <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <FiUser className="mr-2" /> Manage Products
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-700"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link href="/" className="block px-3 py-2 hover:bg-gray-100 rounded">Home</Link>
          <Link href="/products" className="block px-3 py-2 hover:bg-gray-100 rounded">Shop</Link>
          <Link href="/about" className="block px-3 py-2 hover:bg-gray-100 rounded">About</Link>
          <Link href="/contact" className="block px-3 py-2 hover:bg-gray-100 rounded">Contact</Link>

          {/* Mobile Dropdown */}
          <div className="border-t pt-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-100 rounded"
            >
              <div className="flex items-center space-x-1">
                <FiUser />
                <span>User Menu</span>
              </div>
              <FiChevronDown />
            </button>

            {dropdownOpen && (
              <div className="mt-1 space-y-1">
                <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded">
                  <FiUser className="mr-2" /> Add Product
                </Link>
                <Link href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 rounded">
                  <FiUser className="mr-2" /> Manage Products
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
