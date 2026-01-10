import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Maheen Store
          </h3>
          <p className="text-sm leading-relaxed">
            This is an Maheen-style eCommerce project built with React,
            Tailwind CSS and modern web technologies.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Shop
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/" className="hover:text-white">Best Sellers</Link></li>
            <li><Link to="/" className="hover:text-white">New Arrivals</Link></li>
           
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Help
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Customer Service</Link></li>
            <li><Link to="/" className="hover:text-white">Returns</Link></li>
            <li><Link to="/" className="hover:text-white">Shipping</Link></li>
            <li><Link to="/" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@maheenstore.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Pakistan</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Maheen — All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

