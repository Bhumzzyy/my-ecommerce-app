import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-10 pb-4 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-8">Vastraa</h2>
          <p className="mb-2 text-base">
            Style for every side of you – from ETHNIC roots to WESTERN vibes.
            Explore FORMAL flair, SPORTY comfort, and COZY NIGHT – all in one wardrobe.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="text-2xl font-bold mb-8">Quick Links</h2>
          <ul className="space-y-3 text-base">
            <li><Link to="/home" className="hover:underline">Home</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/about" className="hover:underline">About us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold md:text-center mb-8">Follow Us</h2>
          <div className="flex space-x-4 mb-4 justify-center md:justify-start text-xl">
            <a href="#" className="hover:text-gray-400 mb-5 " aria-label="Facebook"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-400 mb-5 " aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-400 mb-5 " aria-label="Twitter"><FaTwitter /></a>
          </div>
          <form action="#" className="flex items-center justify-center mt-4">
            <input
              type="email"
              placeholder="Enter Email..."
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none text-base"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700 transition text-base font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-9 border-t border-gray-700 pt-4 pb-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
          <p className="text-base font-semibold mt-4">&copy; 2024 e-shop All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline text-base font-semibold">Privacy Policy</a>
            <a href="#" className="hover:underline text-base font-semibold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
