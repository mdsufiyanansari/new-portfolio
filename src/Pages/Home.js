import React from 'react'
import{motion} from 'framer-motion'
import { FaFileDownload } from "react-icons/fa";
import { LiaHireAHelper } from "react-icons/lia";


const Home = () => {
 
  return (
    <>
    <motion.div  className="text-5xl py-[10%]   font-bold text-white bg-gradient-to-r from-green-300 to-green-100 w-screen  px-[70px] flex "initial={{ opacity: 0}} whileInView={{opacity:1}} viewport={{ once: true}}>
     <div className=" text-3xl text-green-700 w-[50%]">
      HELLO!
      <h1 className='text-[80px] mt-6 text-white'>I'm Md</h1>
      <h1 className='text-[80px] mt-14 '>Sufiyan Ansari</h1>
      <h1 className='text-[80px] mt-16 text-white'>A Web Devloper</h1>
      <p className='mt-14 text-xl text-gray-500'>I'm a Freelance UI/UX Designer and Developer based in Bhagalpur,<br /> Bihar. I strives to build immersive and beautiful web applications <br /> through carefully crafted code and user-centric design.</p>

      <div className="flex gap-4">
     <div>
      <motion.button className='flex cursor-pointer gap-2 text-xl bg-white px-5 py-2 mt-6 rounded-full text-green-400 hover:bg-gradient-to-tr from-green-400 to-green-200 hover:text-white'drag whileHover={{scale: 1.1}}> <div className="mt-[5px]"><LiaHireAHelper /></div>HIRE ME</motion.button>
      </div>
      <div>
      <motion.button className='gap-2 cursor-pointer flex text-xl bg-white px-5 py-2 mt-6 rounded-full text-green-400 hover:bg-gradient-to-tr from-green-400 to-green-200 hover:text-white'drag whileHover={{scale: 1.1}}> <div className="mt-[5px]"><FaFileDownload /></div>DOWNLOAD CV</motion.button>
      </div>
      </div>
      
    
     </div>
    <div className='w-[1000px]' > <img src="image/hire.png" alt="" /></div>
    
    </motion.div>
    </>
  )
}

export default Home