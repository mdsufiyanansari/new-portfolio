import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import { AiTwotoneHtml5 } from 'react-icons/ai';

const Projects = () => {
  return (
    <>
      <motion.div
        className="z-[-10] bg-gradient-to-tr from-purple-600 to-purple-100 w-screen min-h-screen center py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="projects"
      >
        <div className="flex flex-wrap justify-center gap-10">
          <Link to='/counter' className="flex justify-center">
            <div className="w-[300px] md:w-[400px] hover:shadow-inner hover:shadow-purple-900 hover:scale-90 duration-500 relative h-[500px] md:h-[600px] bg-slate-100 cursor-pointer rounded-2xl">
              <div className="absolute p-3 h-[50%]">
                <img src="image/counter.png" alt="" className='rounded-2xl w-full h-full object-cover' />
                <div className="h-[105%] mt-2 bg-gradient-to-tr from-purple-300 to-purple-100 text-xl font-medium px-4 rounded-br-full rounded-tl-full">
                  <h1 className='text-center text-3xl md:text-4xl font-bold'>Counter App</h1>
                  <h3>Description: <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatem corrupti excepturi quisquam blanditiis aliquid.</span></h3>
                  <h3 className='mt-4 flex gap-2 md:gap-8'>Language: <AiTwotoneHtml5 className='text-2xl md:text-4xl text-orange-600' /> <SiTailwindcss className='text-2xl md:text-4xl text-blue-300' /> <SiJavascript className='text-2xl md:text-4xl text-yellow-500' /></h3>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/calculator' className="flex justify-center">
            <div className="w-[300px] md:w-[400px] hover:shadow-inner hover:shadow-purple-900 hover:scale-90 duration-500 relative h-[500px] md:h-[600px] bg-slate-100 cursor-pointer rounded-2xl">
              <div className="absolute p-3 h-[50%]">
                <img src="image/acount.png" alt="" className='rounded-2xl w-full h-full object-cover' />
                <div className="h-[105%] mt-2 bg-gradient-to-tr from-purple-300 to-purple-100 text-xl font-medium px-4 rounded-br-full rounded-tl-full">
                  <h1 className='text-center text-3xl md:text-4xl font-bold'>Calculator App</h1>
                  <h3>Description: <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatem corrupti excepturi quisquam blanditiis aliquid.</span></h3>
                  <h3 className='mt-4 flex gap-2 md:gap-8'>Language: <AiTwotoneHtml5 className='text-2xl md:text-4xl text-orange-600' /> <SiTailwindcss className='text-2xl md:text-4xl text-blue-300' /> <SiJavascript className='text-2xl md:text-4xl text-yellow-500' /></h3>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/clock' className="flex justify-center">
            <div className="w-[300px] md:w-[400px] hover:shadow-inner hover:shadow-purple-900 hover:scale-90 duration-500 relative h-[500px] md:h-[600px] bg-slate-100 cursor-pointer rounded-2xl">
              <div className="absolute p-3 h-[50%]">
                <img src="image/clock.png" alt="" className='rounded-2xl w-full h-full object-cover' />
                <div className="h-[105%] mt-2 bg-gradient-to-tr from-purple-300 to-purple-100 text-xl font-medium px-4 rounded-br-full rounded-tl-full">
                  <h1 className='text-center text-3xl md:text-4xl font-bold'>Clock App</h1>
                  <h3>Description: <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatem corrupti excepturi quisquam blanditiis aliquid.</span></h3>
                  <h3 className='mt-4 flex gap-2 md:gap-8'>Language: <AiTwotoneHtml5 className='text-2xl md:text-4xl text-orange-600' /> <SiTailwindcss className='text-2xl md:text-4xl text-blue-300' /> <SiJavascript className='text-2xl md:text-4xl text-yellow-500' /></h3>
                </div>
              </div>
            </div>
          </Link>

          <Link to='/temperature' className="flex justify-center">
            <div className="w-[300px] md:w-[400px] hover:shadow-inner hover:shadow-purple-900 hover:scale-90 duration-500 relative h-[500px] md:h-[600px] bg-slate-100 cursor-pointer rounded-2xl">
              <div className="absolute p-3 h-[50%]">
                <img src="image/temp2.png" alt="" className='rounded-2xl w-full h-full object-cover' />
                <div className="h-[105%] mt-2 bg-gradient-to-tr from-purple-300 to-purple-100 text-xl font-medium px-4 rounded-br-full rounded-tl-full">
                  <h1 className='text-center text-3xl md:text-4xl font-bold'>Temperature App</h1>
                  <h3>Description: <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus voluptatem corrupti excepturi quisquam blanditiis aliquid.</span></h3>
                  <h3 className='mt-4 flex gap-2 md:gap-8'>Language: <AiTwotoneHtml5 className='text-2xl md:text-4xl text-orange-600' /> <SiTailwindcss className='text-2xl md:text-4xl text-blue-300' /> <SiJavascript className='text-2xl md:text-4xl text-yellow-500' /></h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
