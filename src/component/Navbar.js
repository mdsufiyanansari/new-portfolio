import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="z-50 bg-white w-screen h-[80px] bg-opacity-55 backdrop-filter backdrop-blur-2xl fixed flex justify-between items-center px-4 md:px-8">
        <div className="w-[150px] h-[100px] center font-bold text-green-400">
          <img src="image/img1.png" alt="Logo" />
        </div>
        <div className="text-2xl hidden md:flex gap-[40px]">
          <div className="text-green-300 font-bold cursor-pointer hover:text-green-600">
            <Link smooth to='/#'>Home</Link>
          </div>
          <div className="cursor-pointer hover:text-green-500">
            <Link smooth to='/#about'>About</Link>
          </div>
          <div className="cursor-pointer hover:text-green-500">
            <Link smooth to='/#projects'>Projects</Link>
          </div>
          <div className="cursor-pointer hover:text-green-500">
            <Link smooth to='/#Skills'>Skills</Link>
          </div>
          <div className="cursor-pointer hover:text-green-500">
            <Link smooth to='/#contact'>Contact</Link>
          </div>
        </div>
        <button className="hidden md:block bg-white w-[150px] h-[50px] border-green-300 border-[4px] rounded-full text-xl font-semibold text-green-400 hover:bg-green-300 hover:text-white hover:border-white duration-700">
          Hire me
        </button>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-green-400 text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-2xl flex flex-col gap-6">
            <div className="text-green-300 font-bold cursor-pointer hover:text-green-600" onClick={toggleMenu}>
              <Link smooth to='/#'>Home</Link>
            </div>
            <div className="cursor-pointer hover:text-green-500" onClick={toggleMenu}>
              <Link smooth to='/#about'>About</Link>
            </div>
            <div className="cursor-pointer hover:text-green-500" onClick={toggleMenu}>
              <Link smooth to='/#projects'>Projects</Link>
            </div>
            <div className="cursor-pointer hover:text-green-500" onClick={toggleMenu}>
              <Link smooth to='/#Skills'>Skills</Link>
            </div>
            <div className="cursor-pointer hover:text-green-500" onClick={toggleMenu}>
              <Link smooth to='/#contact'>Contact</Link>
            </div>
          </div>
          <button className="mt-10 bg-white w-[150px] h-[50px] border-green-300 border-[4px] rounded-full text-xl font-semibold text-green-400 hover:bg-green-300 hover:text-white hover:border-white duration-700">
            Hire me
          </button>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;
