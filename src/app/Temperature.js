import React, { useState } from 'react';

const Temperature = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const convertCelsius = (e) => setCelsius(e.target.value);
  const convertFahrenheit = (e) => setFahrenheit(e.target.value);
  const convertKelvin = (e) => setKelvin(e.target.value);

  const convertToCelsius = () => {
    if (fahrenheit !== '') {
      setCelsius(((parseFloat(fahrenheit) - 32) * 5 / 9).toFixed(2));
    } else if (kelvin !== '') {
      setCelsius((parseFloat(kelvin) - 273.15).toFixed(2));
    }
  };

  const convertToFahrenheit = () => {
    if (celsius !== '') {
      setFahrenheit(((parseFloat(celsius) * 9 / 5) + 32).toFixed(2));
    } else if (kelvin !== '') {
      setFahrenheit(((parseFloat(kelvin) - 273.15) * 9 / 5 + 32).toFixed(2));
    }
  };

  const convertToKelvin = () => {
    if (celsius !== '') {
      setKelvin((parseFloat(celsius) + 273.15).toFixed(2));
    } else if (fahrenheit !== '') {
      setKelvin(((parseFloat(fahrenheit) - 32) * 5 / 9 + 273.15).toFixed(2));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-slate-400 p-6">
      <div className="w-full max-w-xl p-8 backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl border border-white/40">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Temperature Converter</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-800 font-semibold mb-1">Celsius</label>
            <input
              type="number"
              value={celsius}
              onChange={convertCelsius}
              placeholder="Enter Celsius"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Fahrenheit</label>
            <input
              type="number"
              value={fahrenheit}
              onChange={convertFahrenheit}
              placeholder="Enter Fahrenheit"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold mb-1">Kelvin</label>
            <input
              type="number"
              value={kelvin}
              onChange={convertKelvin}
              placeholder="Enter Kelvin"
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={convertToCelsius}
            className="flex-1 bg-cyan-500 hover:bg-cyan-700 text-white py-3 rounded-xl transition-all duration-300"
          >
            Convert to Celsius
          </button>
          <button
            onClick={convertToFahrenheit}
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-xl transition-all duration-300"
          >
            Convert to Fahrenheit
          </button>
          <button
            onClick={convertToKelvin}
            className="flex-1 bg-purple-500 hover:bg-purple-700 text-white py-3 rounded-xl transition-all duration-300"
          >
            Convert to Kelvin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
