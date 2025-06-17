'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaRobot, FaMobileAlt, FaLightbulb, FaGlobe, FaBrain } from 'react-icons/fa';

const courses = [
  {
    icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
    title: 'Coding Basics Made Fun',
    description: 'Learn fundamental coding concepts through games, drag-and-drop logic, and creative activities.',
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-400" />,
    title: 'Creative Programming Foundations',
    description: 'Use visual coding platforms to build stories, animations, and basic problem-solving skills.',
  },
  {
    icon: <FaGlobe className="text-4xl text-yellow-400" />,
    title: 'Build Your First Website',
    description: 'Design and code simple websites using HTML and CSS in a kid-friendly environment.',
  },
  {
    icon: <FaMobileAlt className="text-4xl text-yellow-400" />,
    title: 'Mobile App Development',
    description: 'Create simple apps using block-based tools perfect for young beginners.',
  },
  {
    icon: <FaRobot className="text-4xl text-yellow-400" />,
    title: 'Simple Robotics & Smart Tech',
    description: 'Explore robotics, sensors, and automation using simulators and basic kits.',
  },
  {
    icon: <FaBrain className="text-4xl text-yellow-400" />,
    title: 'Intro to AI & Tech Challenges',
    description: 'Discover the basics of Artificial Intelligence and build fun innovation projects.',
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
            className="bg-white text-[#0a1f44] rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{course.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
