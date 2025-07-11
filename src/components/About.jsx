'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 px-6 text-[#0a1f44]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-snug">
            About <span className="text-yellow-400">KODE.DEV</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            At <span className="font-semibold">KODE.DEV</span>, we’re on a mission to spark curiosity, creativity, and confidence in your child through tech education that’s built for their future — and designed for now.

We believe every child deserves the chance to explore coding, robotics, and AI in a safe, supportive, and fun environment — no experience required. Our programs are made for kids ages 5 to 12, turning screen time into skill-building time.
          </p>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
            Through interactive lessons, creative projects, and hands-on exploration, we empower kids to think critically, solve problems, and build real tech solutions — preparing them for a future powered by innovation.
          </p>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/images/tutor1.jpg"
            alt="Kids learning tech"
            className="w-full max-w-[600px] rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
