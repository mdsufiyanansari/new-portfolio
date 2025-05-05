import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-800 py-24 px-4 font-sans">
      <section className="max-w-6xl mx-auto">
        {/* Hero Section with Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <img
            src="./image/my pic.jpg" // Replace with your image path
            alt="Sufiyan"
            className="w-36 h-36 rounded-full mx-auto border-4 border-cyan-500 shadow-2xl mb-6 object-cover"
          />
          <h1 className="text-5xl font-extrabold text-cyan-600 mb-4">Hi, I'm Sufiyan</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate front-end developer who loves building modern, interactive websites using React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
          {[  
            {
              title: "My Background",
              desc:
                "I started my journey with a passion for UI/UX design and problem-solving. I've created scalable and maintainable components in real-world projects.",
            },
            {
              title: "What I Love Building",
              desc:
                "I enjoy building dynamic dashboards, landing pages, and highly interactive user interfaces with a focus on speed and aesthetics.",
            },
            {
              title: "Tools & Tech",
              desc:
                "I specialize in React, Tailwind CSS, Framer Motion, Firebase, Git, GitHub, Netlify, Vercel, and modern JavaScript (ES6+).",
            },
            {
              title: "Beyond Coding",
              desc:
                "Apart from coding, I love exploring new design trends, contributing to open-source, and experimenting with minimalist design and animations.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={i % 2 === 0 ? fadeInUp : fadeInDown}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600">{item.title}</h3>
              <p className="text-gray-700 text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Signature or Closing Line */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 text-center text-lg text-gray-600"
        >
          Let's build something <span className="text-cyan-500 font-semibold">amazing</span> together!
        </motion.p>
      </section>
    </div>
  );
}
