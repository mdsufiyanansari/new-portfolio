import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";

const skills = ["React", "Tailwind", "Framer Motion", "JavaScript", "Firebase"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function PortfolioHome() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [showResume, setShowResume] = useState(false);
  const openResume = () => setShowResume(true);
  const closeResume = () => setShowResume(false);

  return (
    <>
      <div
        className={`min-h-screen ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-gray-100 to-white text-gray-800"
        } font-sans px-4 py-24`}
      >
        {/* Dark Mode Toggle */}
        <div className="fixed top-5 right-5 z-10">
          <button
            onClick={toggleDarkMode}
            className="bg-cyan-400 hover:bg-cyan-500 rounded-full p-2 text-white shadow-lg transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center">
          <motion.img
            src="./image/my pic.jpg"
            alt="Sufiyan"
            className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-300 shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-extrabold mb-3 text-cyan-500"
          >
            Hi, I'm Sufiyan 👋
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            A passionate front-end developer crafting beautiful, responsive websites with React and Tailwind CSS.
          </motion.p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-6">
            <Link to="/contact">
              <li className="bg-cyan-500 hover:bg-cyan-600 rounded-full px-8 py-3 font-semibold shadow-md text-white transition">
                Contact Me
              </li>
            </Link>
            <Link to="/projects">
              <li className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white rounded-full px-8 py-3 font-semibold transition">
                View Projects
              </li>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-6 text-2xl text-gray-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-sufiyan-ansari-66746a344"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* View Resume Button */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button
              onClick={openResume}
              className="inline-block border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-full transition shadow-md"
            >
              View Resume
            </button>
          </div>
        </section>

        {/* Skills Section */}
        <motion.section
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan-500">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-white border border-gray-300 px-6 py-3 rounded-full text-md font-semibold text-gray-700 shadow-md hover:bg-cyan-100 transition"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-500">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Project 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 transition hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <img
                src="https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg"
                alt="E-Commerce"
                className="rounded-xl mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">E-Commerce App</h3>
              <p className="text-gray-600 mb-4">
                A modern shopping platform with real-time cart, user authentication, and payment integration.
              </p>
              <Link to="https://shopy-weld.vercel.app/">
                <li className="text-cyan-500 hover:underline font-medium">View Project →</li>
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 transition hover:shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <img
                src=" https://mir-s3-cdn-cf.behance.net/project_modules/1400/f98eb6177449205.64d631cc72f17.png"
                alt="Weather App"
                className="rounded-xl mb-5"
              />
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Weather App</h3>
              <p className="text-gray-600 mb-4">
                Sleek UI that fetches real-time weather based on user location, built with OpenWeather API.
              </p>
              <Link to="/weather">
                <li className="text-cyan-500 hover:underline font-medium">View Project →</li>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Resume PDF Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-full relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={closeResume}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ❌
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/assest/resume.pdf"
              title="Resume PDF"
              className="w-[98%] h-[100vh]"
            ></iframe>
          </div>
        </div>
      )}

      {/* Other Page Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
