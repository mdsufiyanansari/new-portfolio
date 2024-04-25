import React, { useState } from 'react';

const Temperature = () => {
  // State variables to store the input values and converted temperatures
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  // Function to handle Celsius input change
  const convertCelsius = (e) => {
    setCelsius(e.target.value);
  };

  // Function to handle Fahrenheit input change
  const convertFahrenheit = (e) => {
    setFahrenheit(e.target.value);
  };

  // Function to handle Kelvin input change
  const convertKelvin = (e) => {
    setKelvin(e.target.value);
  };

  // Function to convert temperature to Celsius
  const convertToCelsius = () => {
    if (fahrenheit !== '') {
      setCelsius(((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2));
    } else if (kelvin !== '') {
      setCelsius((parseFloat(kelvin) - 273.15).toFixed(2));
    }
  };

  // Function to convert temperature to Fahrenheit
  const convertToFahrenheit = () => {
    if (celsius !== '') {
      setFahrenheit(((parseFloat(celsius) * 9 / 5) + 32).toFixed(2));
    } else if (kelvin !== '') {
      setFahrenheit(((parseFloat(kelvin) - 273.15) * 9 / 5 + 32).toFixed(2));
    }
  };

  // Function to convert temperature to Kelvin
  const convertToKelvin = () => {
    if (celsius !== '') {
      setKelvin((parseFloat(celsius) + 273.15).toFixed(2));
    } else if (fahrenheit !== '') {
      setKelvin(((parseFloat(fahrenheit) - 32) * 5 / 9 + 273.15).toFixed(2));
    }
  };

  return (
    <>
      <div className="h-screen center " >
        <div className="p-4 w-[550px] opacity-70 shadow-2xl shadow-black h-[500px] bg-gradient-to-tr from-slate-400 to-gray-200 rounded-bl-3xl rounded-tr-3xl">
          <label htmlFor="" className="text-xl font-semibold">
            Enter the Celsius
            <input
              type="text"
              className="w-full font-thin mt-2 text-black outline-gray-200 h-12 px-4 "
              placeholder="Celsius"
              value={celsius}
              onChange={convertCelsius}
            />
          </label>

          <label htmlFor="" className="text-xl font-semibold">
            Enter the Fahrenheit
            <input
              type="text"
              className="w-full font-thin mt-2 text-black outline-gray-200 h-12 px-4 "
              placeholder="Fahrenheit"
              value={fahrenheit}
              onChange={convertFahrenheit}
            />
          </label>

          <label htmlFor="" className="text-xl font-semibold">
            Enter the Kelvin
            <input
              type="text"
              className="w-full outline-gray-200  font-thin mt-2 text-black  h-12 px-4"
              placeholder="Kelvin"
              value={kelvin}
              onChange={convertKelvin}
            />
          </label>

          <div className="mt-10 font-medium flex gap-2">
            <button
              onClick={convertToCelsius}
              className="w-[200px] hover:bg-gradient-to-tr from-gray-900 to-gray-100 duration-1000 hover:shadow-inner hover:shadow-white rounded-full border-2 border-white hover:text-white p-2"
            >
              Convert To Celsius
            </button>

            <button
              onClick={convertToFahrenheit}
              className="w-[230px] hover:bg-gradient-to-tr from-gray-900 to-gray-100 duration-1000 hover:shadow-inner hover:shadow-white rounded-full border-2 border-white hover:text-white p-2"
            >
              Convert To Fahrenheit
            </button>

            <button
              onClick={convertToKelvin}
              className="w-[200px] hover:bg-gradient-to-tr from-gray-900 to-gray-100 duration-1000 hover:shadow-inner hover:shadow-white rounded-full border-2 border-white hover:text-white p-2"
            >
              Convert To Kelvin
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temperature;
