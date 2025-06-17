'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#0a1f44] text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Welcome to <span className="text-yellow-400">KODE.DEV</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Nurturing young minds for a future in innovation and technology. Join our coding, robotics, and AI classes built just for kids!
          </motion.p>

          <div className="flex gap-4">
            <Link href="#courses">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full shadow-md transition">
                Explore Courses
              </button>
            </Link>
            <Link href="#contact">
              <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-6 py-3 rounded-full transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image or Illustration */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <img
            src="/images/tutor1.jpg"
            alt="Kids Learning Tech"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
