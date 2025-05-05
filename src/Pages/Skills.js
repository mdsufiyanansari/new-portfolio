import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiFramer, SiHtml5 } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={36} />, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={36} />, color: "text-sky-400" },
  { name: "Framer Motion", icon: <SiFramer size={36} />, color: "text-pink-500" },
  { name: "JavaScript", icon: <FaJs size={36} />, color: "text-yellow-400" },
  { name: "Firebase", icon: <SiFirebase size={36} />, color: "text-orange-400" },
  { name: "HTML5", icon: <SiHtml5 size={36} />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt size={36} />, color: "text-blue-500" },
  { name: "GitHub", icon: <FaGithub size={36} />, color: "text-gray-700" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 py-24 px-6">
      <section className="max-w-6xl mx-auto">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl sm:text-5xl font-bold text-center mb-16 text-cyan-500"
        >
          My Skills
        </motion.h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative group bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 w-40 h-40 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 opacity-0 group-hover:opacity-100 blur-lg transition duration-300 z-0" />
              
              {/* Icon */}
              <div className={`z-10 ${skill.color} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              
              {/* Skill Name */}
              <p className="text-sm font-semibold text-gray-800 z-10 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
