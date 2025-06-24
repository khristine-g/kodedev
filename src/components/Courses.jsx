'use client';

import { motion } from 'framer-motion';
import React from 'react';
import {
  FaLaptopCode,
  FaGlobe,
  FaGamepad,
  FaRobot,
  FaBrain,
  FaLightbulb,
} from 'react-icons/fa';

const courses = [
  {
    icon: <FaLaptopCode />,
    badge: 'Beginner | Ages 6–10',
    title: 'Coding Basics for Kids',
    description:
      'Introduce young learners to programming through storytelling and logic-building using beginner-friendly platforms like Scratch and Blockly. Perfect for first-time coders.',
  },
  {
    icon: <FaGlobe />,
    badge: 'Creative | Ages 8–12',
    title: 'Web Development for Kids',
    description:
      'Learn how to create colorful and interactive websites using HTML and CSS in a fun, hands-on environment. Ideal for creative minds ready to build online.',
  },
  {
    icon: <FaGamepad />,
    badge: 'Interactive | Ages 8–12',
    title: 'Game Development for Kids',
    description:
      'Kids learn to design and code their own games using Scratch, developing creativity and problem-solving as they bring ideas to life.',
  },
  {
    icon: <FaRobot />,
    badge: 'STEM | Ages 9–13',
    title: 'Build with Robotics & Solve Challenges',
    description:
      'Explore the exciting world of robotics and engineering using virtual kits. Kids solve real-world problems while learning how tech powers our world.',
  },
  {
    icon: <FaBrain />,
    badge: 'Future-Ready | Ages 10–14',
    title: 'AI for Kids (Intro to Artificial Intelligence)',
    description:
      'Hands-on introduction to AI and machine learning, including image recognition and smart decisions. Perfect for curious minds who want to explore future tech.',
  },
  {
    icon: <FaLightbulb />,
    badge: 'Imaginative | Ages 7–12',
    title: 'Creative Tech Projects',
    description:
      'Combine art and technology to create animations, stories, and games. Encourages self-expression while developing digital skills in a fun, open-ended environment.',
  },
];

export default function Courses() {
  return (
    <section className="bg-[#0a1f44] text-white py-28 px-6" id="courses">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Courses
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tech classes built for curious young minds — from coding and websites to robotics and AI!
        </motion.p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {courses.map((course, idx) => (
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
              className="mb-4"
              whileHover={{ rotate: 10, scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {React.cloneElement(course.icon, {
                className: 'text-4xl text-yellow-400',
              })}
            </motion.div>
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full mb-3 font-medium">
              {course.badge}
            </span>
            <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
