import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce App",
    image: "https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg",
    description:
      "A modern shopping platform with real-time cart, authentication, and integrated Stripe payments.",
    liveLink: "https://shopy-weld.vercel.app/",
    githubLink: "https://github.com/",
  },
  {
    title: "Weather App",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png",
    description:
      "Real-time weather updates with location detection using OpenWeatherMap API and animated UI.",
    liveLink: "/weather",
    githubLink: "https://github.com/",
  },
  {
    title: "Hospital Website",
    image: "https://content.jdmagicbox.com/v2/comp/bangalore/p3/080pxx80.xx80.170919171915.f2p3/catalogue/manipal-hospital-old-airport-road-bangalore-hospitals-cx9m9ft1u2.jpg",
    description:
      "A comprehensive hospital website with appointment booking, doctor profiles, and patient resources.",
    liveLink: "https://prospine-3-0.vercel.app/",
    githubLink: "https://github.com/mdsufiyanansari/prospine_3.0",
  },
  {
    title: "Temperature Converter",
    image: "https://www.beamex.com/app/uploads/2022/11/temperature-graph-2018-06-18-v2.jpg",
    description:
      "A simple app to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
    liveLink: "/temperature",
    githubLink: "https://github.com/",
  },
  {
    title: "Task Manager",
    image: "https://cdn1.vectorstock.com/i/1000x1000/82/85/task-manager-vector-42518285.jpg",
    description:
      "A productivity app to manage tasks with priority levels, deadlines, and a beautiful Kanban UI.",
    liveLink: "/task",
    githubLink: "https://github.com/",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prev) => (prev === projects.length ? 3 : projects.length));
  };

  const isShowingAll = visibleCount === projects.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white text-gray-800 py-24 px-4 font-sans">
      <section className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl sm:text-5xl font-bold text-center text-cyan-600 mb-16"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.slice(0, visibleCount).map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-6">{project.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-500 hover:underline text-sm"
                  >
                    Live Demo <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black text-sm"
                  >
                    GitHub <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300"
            >
              {isShowingAll ? "Show Less" : "Show More Projects"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
