'use client';

import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Tour Consultant</h3>
            <p className="text-gray-400">Jelajahi keindahan Sumatera Barat dengan kami.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-secondary transition">Home</Link></li>
              <li><Link href="/packages" className="text-gray-400 hover:text-secondary transition">Packages</Link></li>
              <li><Link href="/transport" className="text-gray-400 hover:text-secondary transition">Transport</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition">Flight Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition">Car Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition">Tour Packages</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-secondary transition"><FiMail size={20} /></a>
            </div>
            <p className="text-gray-400">info@touronsultant.com</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Tour Consultant. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-secondary transition text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
