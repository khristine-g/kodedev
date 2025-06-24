'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaPuzzlePiece,
  FaBrain,
  FaRobot,
  FaLaptopCode,
  FaCogs,
  FaGlobeAfrica,
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLaptopCode />,
    title: 'Create Practical Digital Projects',
    description:
      'Kids learn to build apps, games, and simulations that reflect real-life challenges and creativity.',
  },
  {
    icon: <FaBrain />,
    title: 'Supports School Success',
    description:
      'Coding sharpens focus, reasoning, and computational skills that directly enhance classroom learning.',
  },
  {
    icon: <FaRobot />,
    title: 'AI & Future-Ready Skills',
    description:
      'Equips children with tools and concepts to understand and work with tomorrow’s smart technologies.',
  },
  {
    icon: <FaCogs />,
    title: 'Pathway to Tech Careers',
    description:
      'Builds early foundations for engineering, robotics, and coding professions in a digital-first world.',
  },
  {
    icon: <FaRocket />,
    title: 'Improves Cognitive Agility',
    description:
      'Strengthens multitasking, focus, memory, and logical sequencing through interactive challenges.',
  },
  {
    icon: <FaGlobeAfrica />,
    title: 'Empowers Global Problem Solving',
    description:
      'Encourages young minds to build tech-driven solutions that make a difference in their communities and beyond.',
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#0a1f44] text-white py-28 px-6" id="benefits">
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/* Top Image */}
        <motion.img
          src="/images/tutor3.jpg"
          alt="Kids coding together"
          className="w-full max-h-[400px] object-cover rounded-2xl mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Coding Matters for Your Child
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Coding empowers kids not just to succeed — but to contribute. By turning ideas into tech-driven solutions, your child can grow into a thoughtful creator, innovator, and future leader.
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {benefits.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white text-[#0a1f44] rounded-xl p-8 shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.15)',
            }}
          >
            <motion.div
              className="mb-4 text-yellow-400"
              whileHover={{ rotate: 10, scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {React.cloneElement(item.icon, { className: 'text-4xl' })}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
