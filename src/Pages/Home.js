import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from "react-icons/fa";
import { LiaHireAHelper } from "react-icons/lia";

const Home = () => {
  return (
    <>
      <motion.div
        className="text-5xl py-[10%] font-bold text-white bg-gradient-to-r from-green-300 to-green-100 w-screen px-4 md:px-[70px] flex flex-col md:flex-row items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-3xl text-green-700 w-full md:w-[50%] text-center md:text-left">
          HELLO!
          <h1 className='text-[50px] md:text-[80px] mt-6 text-white'>I'm Md</h1>
          <h1 className='text-[50px] md:text-[80px] mt-4 md:mt-14'>Sufiyan Ansari</h1>
          <h1 className='text-[50px] md:text-[80px] mt-4 md:mt-16 text-white'>A Web Developer</h1>
          <p className='mt-8 md:mt-14 text-lg md:text-xl text-gray-500'>
            I'm a Freelance UI/UX Designer and Developer based in Bhagalpur, Bihar. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
            <motion.button
              className='flex items-center gap-2 text-xl bg-white px-5 py-2 rounded-full text-green-400 hover:bg-gradient-to-tr from-green-400 to-green-200 hover:text-white duration-300'
              drag
              whileHover={{ scale: 1.1 }}
            >
              <LiaHireAHelper className="mt-1" /> HIRE ME
            </motion.button>
            <motion.button
              className='flex items-center gap-2 text-xl bg-white px-5 py-2 rounded-full text-green-400 hover:bg-gradient-to-tr from-green-400 to-green-200 hover:text-white duration-300'
              drag
              whileHover={{ scale: 1.1 }}
            >
              <FaFileDownload className="mt-1" /> DOWNLOAD CV
            </motion.button>
          </div>
        </div>
        <div className='w-full md:w-[650px] border-b-2 center h-[300px] md:h-[800px] border-white bg-green-600 opacity-30 rounded-full flex justify-center items-center mt-10 md:mt-0'>
          <img src="image/my pic.jpg" alt="My Pic" className='h-[250px] md:h-[700px] rounded-full border-[6px] border-green-200' />
        </div>
      </motion.div>
    </>
  );
}

export default Home;
