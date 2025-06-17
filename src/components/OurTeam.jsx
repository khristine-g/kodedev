'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Khristine Githige',
    role: 'Software Engineer & Lead Instructor',
    image: '/images/tutor2.jpeg',
  },
  {
    name: 'Everlynn Muthoni',
    role: 'Data Analyst & Curriculum Developer',
    image: '/images/tutor4.jpeg',
  },
];

export default function OurTeam() {
  return (
    <section className="bg-[#f5f7fb] py-24 px-6" id="team">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          A passionate group of educators, innovators, and tech enthusiasts committed to inspiring the next generation of creators.
        </motion.p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 max-w-4xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#0a1f44]">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
