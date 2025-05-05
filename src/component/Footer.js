import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/sufiyan",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/sufiyan",
    label: "GitHub",
  },
  {
    icon: <FaEnvelope />,
    url: "mailto:sufiyan@example.com",
    label: "Email",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-800 via-gray-900 to-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Left: Name + Year */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left text-sm text-gray-400"
        >
          © {year} Sufiyan. All rights reserved.
        </motion.div>

        {/* Right: Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6"
        >
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-400 hover:text-cyan-500 transition-colors text-2xl p-2 rounded-full hover:bg-gray-800"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom: Optional Small Info (Privacy, Terms, etc.) */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Privacy | Terms & Conditions | Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;
