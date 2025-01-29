"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-mdcl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between text-xl">
        <div className="font-bold">
          <h1 className=" font-bold text-2xl">R<span className="text-cyan-400">AB</span></h1>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="font-semibold hover:text-cyan-500">
            <a href="#home">Home</a>
          </li>
          <li className="font-semibold hover:text-cyan-500">
            <a href="#about">About</a>
          </li>
          <li className="font-semibold hover:text-cyan-500">
            <a href="#service">Service</a>
          </li>
          <li className="font-semibold hover:text-cyan-500">
            <a href="#contact">Project</a>
          </li>
          <li className="font-semibold hover:text-cyan-500">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <a href="#home" className="block px-4 py-2 hover:bg-blue-700">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-700">
            About
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-blue-700">
            Services
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
