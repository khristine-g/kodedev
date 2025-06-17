'use client';

import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">KODE.DEV</h2>
          <p className="text-gray-300">
            Nurturing young minds for a future in innovation and technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#team" className="hover:text-yellow-400">Our Team</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-300">WhatsApp: +1 510 589-9813</p>
          <p className="text-gray-300 mt-2">Email: kodedev@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl text-yellow-400">
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-white transition" /></a>
            <a href="#"><FaYoutube className="hover:text-white transition" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} KODE.DEV. All rights reserved.
      </div>
    </footer>
  );
}
