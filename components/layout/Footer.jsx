"use client";
import React from "react";
import {
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "/", icon: <Facebook className="w-5 h-5" /> },
  { href: "/", icon: <Twitter className="w-5 h-5" /> },
  { href: "/", icon: <Instagram className="w-5 h-5" /> },
  { href: "/", icon: <Youtube className="w-5 h-5" /> },
];

const quickLinks = ["About Us", "Shop", "Categories", "Blog", "Contact"];

const customerServiceLinks = [
  "FAQ",
  "Shipping Policy",
  "Returns & Exchanges",
  "Track Order",
  "Payment Methods",
];

const Footer = () => {
  const currentYear = new Date().getFullYear(); // This can be moved to a constant if not changing

  const renderLinks = (links) => (
    <ul className="space-y-4">
      {links.map((link, i) => (
        <li key={i}>
          <Link
            href="/"
            className="text-gray-400 hover:text-purple-400 transition-colors flex items-center group"
          >
            <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay in the loop
              </h3>
              <p className="text-purple-100">
                Subscribe for exclusive offers and new arrivals
              </p>
            </div>
            <form className="w-full md:w-auto">
              <div className="flex max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/10 backdrop-blur-sm text-white placeholder-purple-200 border border-purple-400/30"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-purple-600 rounded-r-lg hover:bg-purple-50 transition-colors duration-200 flex items-center"
                >
                  <span className="hidden sm:inline mr-2">Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Trendify
            </h2>
            <p className="text-gray-400 mb-6">
              Discover the latest trends in fashion, electronics, and lifestyle
              products. Shop with confidence with our 30-day money-back
              guarantee.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon }, i) => (
                <Link
                  href={href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  key={i}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            {renderLinks(quickLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Customer Service
            </h3>
            {renderLinks(customerServiceLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  123 Fashion Street, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-400">support@trendify.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Trendify. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
