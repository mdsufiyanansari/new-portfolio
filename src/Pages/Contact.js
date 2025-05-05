import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 },
  }),
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50 py-24 px-6">
      <section className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl sm:text-5xl font-extrabold text-center text-cyan-500 mb-14"
        >
          Get in Touch
        </motion.h2>

        {/* Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
          {[{ icon: <FaEnvelope size={24} />, title: "Email", text: "sufiyan@example.com" },
            { icon: <FaPhoneAlt size={24} />, title: "Phone", text: "+91 98765 43210" },
            { icon: <FaMapMarkerAlt size={24} />, title: "Location", text: "Mumbai, India" },
            { icon: <FaLinkedin size={24} />, title: "LinkedIn", text: "linkedin.com/in/sufiyan", link: "https://linkedin.com/in/sufiyan" }
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl hover:border-cyan-300 transition duration-300"
            >
              <div className="text-cyan-500 mb-3">{item.icon}</div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h4>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-cyan-600 transition duration-200"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-gray-600">{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 space-y-6 max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}
