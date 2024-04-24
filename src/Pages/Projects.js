import React from 'react'
// import {Link} from 'react-router-dom'
import{motion} from 'framer-motion'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <>
    <motion.div className="bg-gradient-to-tr from-purple-600 to-purple-100 w-screen h-screen center " initial={{ opacity: 0}} whileInView={{opacity:1}} viewport={{ once: true}}id="projects">
  
      <div className="flex gap-[50px]  ">
      
       <Link to='/counter'>   <div className="w-[400px] relative h-[600px] bg-slate-100   cursor-pointer   rounded-2xl">
       <div className="absolute p-3 rounded-2xl"><img src="image/counter.png" alt="" /></div>
        Counter</div></Link>

          
          <div className="w-[400px] h-[600px] bg-slate-100 rounded-2xl relative cursor-pointer">
            <div className="absolute "><img src="image/acount.png" alt="" /></div>
            project-2</div>
          <div className="w-[400px] h-[600px] bg-slate-100 rounded-2xl cursor-pointer">project-3</div>
      </div>

    </motion.div>

    </>
  )
}

export default Projects