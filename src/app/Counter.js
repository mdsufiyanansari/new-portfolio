import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount]=useState(0)


const increament=()=>

{
setCount(count+1);
} 


const decrement=()=>


{
setCount(count-1);
}

  return (
    <>

    <div className="bg-green-900 w-screen h-screen center">

      <div className="bg-white w-[400px] h-[400px] rounded-3xl">
     
    <div className="bg-red-900 mt-[255px] ml-[20px] absolute text-white w-[150px] h-[50px] rounded-2xl text-center p-2   cursor-pointer hover:bg-red-500"
   onClick={()=>decrement()} 
   >Decrement</div>
   <div className="bg-green-200 w-full h-[100px] mt-[100px] text-center ">
    <div className="text-6xl font-bold text-white ml-[180px] mt-[25px] absolute">{count}</div>
    </div>

   <div className="bg-green-600 ml-[220px] mt-[55px] text-white w-[150px] h-[50px] rounded-2xl text-center p-2   cursor-pointer absolute hover:bg-green-950"
   onClick={()=>increament()}
   >Increament</div>
   </div>
    
        </div>
        </>
  )
}

export default Counter
