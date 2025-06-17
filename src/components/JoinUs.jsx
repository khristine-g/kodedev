'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function JoinUs() {
  return (
    <section className="bg-[#0a1f44] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left – Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Join Us in Shaping Future Innovators
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
            At <span className="text-yellow-400 font-semibold">KODE.DEV</span>, we invite families, educators, and young creators to step into the exciting world of technology. Together, we’re guiding tomorrow’s leaders through hands-on experiences in AI, machine learning, and coding.
          </p>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
            The future belongs to bold thinkers — and we’re here to equip them with the tools and mindset to explore, create, and thrive in a world enhanced by intelligent technology. Let’s nurture potential and build a world where young learners confidently innovate with purpose.
          </p>

          <ul className="text-gray-300 mb-10 space-y-3 text-base lg:text-lg">
            <li>✅ Access to engaging and kid-friendly digital content</li>
            <li>✅ STEM-powered, age-tailored lessons</li>
            <li>✅ Real-world project-based learning</li>
            <li>✅ Personalized instruction paths</li>
            <li>✅ Fun, hands-on interactive experiences</li>
            <li>✅ Fully virtual and flexible scheduling</li>
            <li>✅ Led by experienced and passionate instructors</li>
          </ul>

          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-[#0a1f44] px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-300 transition"
            >
              Register Now
            </motion.button>
          </Link>
        </motion.div>

        {/* Right – Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/tutor1.jpg"
            alt="Kids learning tech"
            className="w-full rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
