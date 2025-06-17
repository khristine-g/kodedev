'use client';

import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaRobot, 
  FaGamepad, 
  FaLightbulb, 
  FaGlobe, 
  FaBrain 
} from 'react-icons/fa';

const courses = [
  {
    icon: <FaLaptopCode className="text-4xl text-yellow-400" />,
    title: 'Coding Basics (Scratch & Blockly)',
    description: 'Kids learn logic and storytelling using beginner-friendly platforms like Scratch and Blockly.',
    badge: 'Beginner Friendly',
  },
  {
    icon: <FaGlobe className="text-4xl text-yellow-400" />,
    title: ' Web Development for Kids',
    description: 'Design colorful websites using HTML and CSS in a playful and guided environment.',
    badge: 'Ages 8–12',
  },
  {
    icon: <FaGamepad className="text-4xl text-yellow-400" />,
    title: ' Game Development for Kids',
    description: 'Learn how to create interactive games using Scratch and other visual coding platforms.',
    badge: 'Fun & Interactive',
  },
  {
    icon: <FaRobot className="text-4xl text-yellow-400" />,
    title: ' Robotics & STEM Challenges',
    description: 'Explore basic robotics using virtual kits while learning how tech solves real-world problems.',
    badge: 'STEM Focused',
  },
  {
    icon: <FaBrain className="text-4xl text-yellow-400" />,
    title: ' AI for Kids (Intro to Artificial Intelligence)',
    description: 'Kids get hands-on with machine learning concepts like image recognition and smart decisions.',
    badge: 'Future-Ready',
  },
  {
    icon: <FaLightbulb className="text-4xl text-yellow-400" />,
    title: ' Creative Tech Projects',
    description: 'Blend tech and art by building animations, digital stories, and fun interactive games.',
    badge: 'Creative Thinking',
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
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full mb-3">
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
