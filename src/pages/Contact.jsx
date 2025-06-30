import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-white px-4 md:px-16 lg:px-24 py-12">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Contact Us</h1>

        <p className="text-gray-700 mb-6 text-center text-base">
          We'd love to hear from you! Whether you have a question about our products, orders, or anything else — our team is ready to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>VASTRAA, Ahmedabad, Gujarat, India</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              <span>support@vastraa.in</span>
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">Follow Us</h2>
            <div className="flex gap-4 text-red-600 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-red-800" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-red-800" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-red-800" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea placeholder="Write your message..." rows={4} className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
            </div>
            <button type="submit" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
