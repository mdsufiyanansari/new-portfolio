import React, { useState } from 'react'


const Clock = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime,setCtime] =useState(time);

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime,1000)

 
  return (
    <>  
    <div className="w-screen h-screen text-4xl text-center center">
      <img src="image/rain.png" alt="" className='h-full w-screen relative backdrop-brightness-50' />
    
    <div className=" absolute center backdrop-blur-3xl opacity-60 bg-gradient-to-t from-green-400 to-white w-[500px] h-[500px]  border-b-[5px]  border-r-[4px] border-black  rounded-2xl ">
    
    <div className="absolute center  bg-black w-[400px] h-[400px] rounded-full shadow-2xl shadow-blue-900 ">
  <h1 className='text-white  text-6xl font-bold font-sans'>{ctime}</h1>
 
  </div>
  </div>
    
    </div>

    </>
  )
}

export default Clock