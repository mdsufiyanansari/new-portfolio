import React, { useState } from 'react';

const Calculator = () => {
  const [name, setName] = useState('');

  const equal = () => {
    setName(eval(name));
  };

  const AllClear = () => {
    setName('');
  };

  const clear = () => {
    if (name.length > 0) {
      setName(name.slice(0, -1)); // Remove the last character from the expression
    }
  };

  const handleOperatorClick = (operator) => {
    // Check if the expression is empty and the clicked button is an operator
    if (!name && ['+', '-', '*', '/','%'].includes(operator)) {
      return;
    }
    setName(name + operator);
  };

  return (
    <>
      <div className="bg-green-100 w-screen h-screen center ">
        <div className="bg-blue-200   shadow-2xl  shadow-blue-900 w-[400px] h-[600px]  rounded-2xl p-4 cursor-pointer">
          <input
            className="w-full px-6 shadow-md outline-none shadow-emerald-700 text-right h-28 rounded-xl border-3 border-slate-950 text-4xl"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex gap-3">
            <div
              className="w-[80px] h-[80px] bg-red-600 shadow-inner shadow-black text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-red-700 hover:shadow-2xl "
              onClick={() => AllClear()}> AC </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-600 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-yellow-500 hover:shadow-2xl shadow-inner shadow-black"
              onClick={() => clear()} > Cr </div>

            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => handleOperatorClick('/')}> / </div>

            <div
              className="w-[80px] h-[80px] bg-yellow-100 from-white text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white hover:shadow-2xl shadow-inner shadow-black"
              onClick={() => handleOperatorClick('%')}> % </div>
          </div>
          <div className="flex gap-3">
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '7')}> 7 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '8')}> 8 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '9')}> 9 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => handleOperatorClick('*')}> * </div>
          </div>

          <div className="flex gap-3">
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '4')}> 4 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '5')}> 5 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '6')}> 6 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => handleOperatorClick('-')}> - </div>
          </div>

          <div className="flex gap-3">
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '1')}> 1 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '2')}> 2 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '3')}> 3 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => handleOperatorClick('+')}> + </div>
          </div>

          <div className="flex gap-3">
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '0')}> 0 </div>
            <div
              className="w-[80px] h-[80px] bg-yellow-100 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-white shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => setName(name + '.')}> . </div>
            <div
              className="w-[170px] h-[80px] bg-green-700 text-center py-[20px] text-3xl rounded-full mt-2 hover:bg-green-950 shadow-inner hover:shadow-2xl shadow-black"
              onClick={() => equal()}> = </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
