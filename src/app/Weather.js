import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  CloudSun,
  Sun,
  Moon,
} from "lucide-react"; // Import icons

const API_KEY = "c8f8e7c97ade04efe78a2ec9aa0d8e65";

// Format time to HH:mm
const formatTime = (unix, timezone) => {
  const date = new Date((unix + timezone) * 1000);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  };
  return date.toLocaleTimeString([], options);
};

// Calculate the percentage of the sun's position
const getSunPositionPercent = (sunrise, sunset, current, timezone) => {
  const dayStart = sunrise + timezone;
  const dayEnd = sunset + timezone;
  const now = current + timezone;
  if (now < dayStart) return 0;
  if (now > dayEnd) return 100;
  return ((now - dayStart) / (dayEnd - dayStart)) * 100;
};

// Sun Tracker component
const SunTracker = ({ sunrise, sunset, currentTime, timezone }) => {
  const percent = getSunPositionPercent(sunrise, sunset, currentTime, timezone);
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    let startTime = performance.now();
    const duration = 1000;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimatedPercent(progress * percent);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [percent]);

  const angle = (animatedPercent / 100) * 180;
  const radius = 100;
  const radians = (angle * Math.PI) / 180;
  const x = radius + radius * Math.cos(radians);
  const y = radius - radius * Math.sin(radians);

  return (
    <div className="mt-6">
      <h3 className="text-center text-lg font-semibold mb-3">Sun Position</h3>
      <div className="relative w-full h-40 flex items-center justify-center">
        <svg width="220" height="110" viewBox="0 0 220 110">
          <path
            d="M 10 100 A 100 100 0 0 1 210 100"
            fill="none"
            stroke="#facc15"
            strokeWidth="4"
          />
          <motion.circle
            cx={x + 10}
            cy={y + 10}
            r="10"
            fill="#facc15"
            stroke="white"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </svg>
        <div className="absolute left-4 bottom-4 text-xs text-white/80">
          {formatTime(sunrise, timezone)} AM
        </div>
        <div className="absolute right-4 bottom-4 text-xs text-white/80">
          {formatTime(sunset, timezone)} PM
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [city, setCity] = useState("Bhagalpur");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`),
      ]);

      if (!weatherRes.ok || !forecastRes.ok) {
        throw new Error("Failed to fetch data from the weather API.");
      }

      const weatherData = await weatherRes.json();
      const forecastData = await forecastRes.json();

      if (weatherData.cod !== 200 || forecastData.cod !== "200") {
        setError("City not found!");
        setWeather(null);
        setForecast([]);
      } else {
        setWeather(weatherData);
        setError("");
        const daily = forecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
        setForecast(daily.slice(0, 4));

        const hourly = forecastData.list.filter(item =>
          item.dt_txt.includes("03:00:00") ||
          item.dt_txt.includes("06:00:00") ||
          item.dt_txt.includes("09:00:00")
        );
        setHourlyData(hourly.map(item => ({
          time: item.dt_txt.slice(11, 16),
          temp: item.main.temp,
        })));
      }
    } catch (error) {
      setError(error.message);
      setWeather(null);
      setForecast([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-500 via-cyan-400 to-sky-600 px-4 py-10"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 text-white"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Weather Forecast</h1>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city..."
            className="flex-1 px-4 py-2 rounded-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Search
          </button>
        </form>

        {error && <p className="text-center text-red-300 mb-4">{error}</p>}

        {weather && (
          <div className="text-center space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="text-sm">
                Local Time:{" "}
                {new Date(Date.now() + weather.timezone * 1000 - new Date().getTimezoneOffset() * 60000)
                  .toUTCString()
                  .slice(17, 25)}
              </p>
            </div>

            <div className="flex items-center justify-center gap-6">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="icon"
              />
              <div>
                <p className="text-5xl font-bold">{weather.main.temp}°C</p>
                <p className="capitalize">{weather.weather[0].description}</p>
                <p className="text-sm text-white/80">
                  Feels like: {weather.main.feels_like}°C
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-white/90 mt-4">
              <div><Droplets className="mx-auto mb-1" size={20} /><p className="font-medium">Humidity</p><p>{weather.main.humidity}%</p></div>
              <div><Wind className="mx-auto mb-1" size={20} /><p className="font-medium">Wind</p><p>{weather.wind.speed} m/s</p></div>
              <div><Gauge className="mx-auto mb-1" size={20} /><p className="font-medium">Pressure</p><p>{weather.main.pressure} hPa</p></div>
              <div><Eye className="mx-auto mb-1" size={20} /><p className="font-medium">Visibility</p><p>{weather.visibility / 1000} km</p></div>
              <div><CloudSun className="mx-auto mb-1" size={20} /><p className="font-medium">Clouds</p><p>{weather.clouds.all}%</p></div>
              <div><Sun className="mx-auto mb-1" size={20} /><p className="font-medium">Sunrise</p><p>{formatTime(weather.sys.sunrise, weather.timezone)} AM</p></div>
              <div><Moon className="mx-auto mb-1" size={20} /><p className="font-medium">Sunset</p><p>{formatTime(weather.sys.sunset, weather.timezone)} PM</p></div>
            </div>

            <SunTracker
              sunrise={weather.sys.sunrise}
              sunset={weather.sys.sunset}
              currentTime={Math.floor(Date.now() / 1000)}
              timezone={weather.timezone}
            />

            {/* Hourly Forecast Chart */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">
                Today's Forecast
              </h3>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="5 5" stroke="#555" />
                    <XAxis
                      dataKey="time"
                      tick={{ fill: "#fff" }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fill: "#fff" }}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#fff" }}
                      itemStyle={{ color: "#fff", fontWeight: "bold" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#38bdf8"
                      strokeWidth={3}
                      dot={{ r: 4, fill: "#38bdf8" }}
                      activeDot={{ r: 6, fill: "#0ea5e9" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* 4-Day Forecast */}
        {forecast.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">4-Day Forecast</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {forecast.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-center shadow hover:scale-105 transition"
                >
                  <p className="font-semibold mb-1">
                    {new Date(item.dt_txt).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt="icon"
                    className="mx-auto mb-2"
                  />
                  <p className="text-xl">{item.main.temp}°C</p>
                  <p className="text-sm text-white/80 capitalize">
                    {item.weather[0].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default App;
