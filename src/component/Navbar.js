import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
// import img1 from './image/img1.png';
import{motion} from 'framer-motion'






const Navbar = () => {
  return (
  <>
  
  <div className="z-50 bg-white w-screen h-[80px] bg-opacity-55 backdrop-filter backdrop-blur-2xl  fixed flex justify-around">
    <div className=" w-[150px] h-[100px] center font-bold text-green-400"><img src="image/img1.png" alt="" /></div>
    <div className="text-2xl p-5 flex gap-[40px] ">
  <div className="text-green-300 font-bold cursor-pointer  hover:text-green-600" ><Link smooth to='/#'>Home</Link></div>
      
      <div className="cursor-pointer  hover:text-green-500"><Link smooth to='/#about'>About</Link></div>
      <div className="cursor-pointer  hover:text-green-500"><Link smooth to='/#projects'>Projects</Link></div>
      <div className="cursor-pointer  hover:text-green-500"><Link smooth to='/#projects'>Skills</Link></div>
      <div className="cursor-pointer  hover:text-green-500"><Link smooth to='/#Contact'>Contact</Link></div>
    </div>
    <button className="bg-white w-[300px] h-[50px] mt-[15px] border-green-300 border-[4px] rounded-full text-2xl font-semibold text-green-400 hover:bg-green-300 hover:text-white hover:border-white ">Hire me..</button>

  </div>
  </>
  )
}

export default Navbar