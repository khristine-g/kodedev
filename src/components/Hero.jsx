'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#Oa1F44] h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/tutor1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0a1f44]/70 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Welcome to <span className="text-yellow-400">KODE.DEV</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nurturing young minds for a future in innovation and technology. Join our coding, robotics, and AI classes built just for kids!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="#courses">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-md transition">
              Explore Courses
            </button>
          </Link>
          <Link href="#contact">
            <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold text-lg px-8 py-4 rounded-full transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
