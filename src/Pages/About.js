import React from 'react'
import{motion} from 'framer-motion'
import {  FcBusinessman} from "react-icons/fc";
import { FcRight } from "react-icons/fc";
import { TbMapPinCode } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiIndiaGate } from "react-icons/gi";
import { FaFileDownload } from "react-icons/fa";


const About = () => {
  return (
    <>
    <motion.div className='w-screen h-screen  bg-gradient-to-r from-green-300 to-green-100 text-center text-4xl font-bold  border-2 border-black'initial={{ opacity: 0}} whileInView={{opacity:1}} viewport={{ once: true}} id="about">About Page........
    
    <div className="flex gap-14 py-4">
    
    <div className="w-[50%] h-screen">
      <img src="image/zoho.png" alt="" />
    </div>

    <div className="w-[45%] text-justify ">
      <p className='text-xl text-justify text-gray-400 font-thin'>A small river named Duden flows by their place and supplies it with <br /> the nacessary regelialia </p>
       <div className='leading-relaxed mt-12 font-mono  text-slate-400 {
        
       }'>
       <h1 className='flex text-3xl gap-6'><div className="center bg-white rounded-full w-[50px] h-[50px] ">< FcBusinessman /></div>Name: Md Sufiyan Ansari</h1>
       <h1 className='mt-6 flex text-3xl gap-6'><div className="center bg-white rounded-full w-[50px] h-[50px] "><FcRight /></div>Address: Kilaghat Sarai Bhagalpur</h1>
       <h1 className='mt-6 flex text-3xl gap-6'><div className="center bg-white rounded-full w-[50px] h-[50px]"><TbMapPinCode /></div>Pin code: 812002</h1>
       <h1 className='mt-6 flex text-3xl gap-6'><div className="center bg-white rounded-full w-[50px] h-[50px]"><FaMobileAlt /></div>Mobil no: 9708572107</h1>
       <h1 className='mt-6 flex text-3xl gap-6'><div className="center bg-white rounded-full w-[50px] h-[50px]"><MdEmail /></div>Email: Mdsufiyanansari812002@gmail.com</h1>
       <h1 className='mt-6 flex text-3xl gap-6'><div className="center bg-white rounded-full w-[50px] h-[50px]"><GiIndiaGate /></div>Country: India</h1>
       </div>

       <div className="text-white mt-20"><span className='text-green-400 font-extrabold text-5xl '>4</span> Project Complete</div>
       
       <motion.button className='text-xl bg-white px-5 py-2 mt-6 rounded-full text-green-400 hover:bg-gradient-to-tr from-green-400 to-green-200 hover:text-white flex gap-2'drag whileHover={{scale: 1.1}}> <div className='mt-[5px]'><FaFileDownload /></div>..DOWNLOAD CV..</motion.button>
       

    </div>
    </div>
    </motion.div>
    </>
  )
}

export default About