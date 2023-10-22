import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Weather = () => {
  const apiKey = "enter your api key";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            );

            setWeather(response.data);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city !== "") {
      fetchWeatherData();
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);

      toast.error("Place not registered try another one");
    }
  };

  return (
    <div>
      <div className="  bg-gradient-to-b from-violet-700 via-fuchsia-600 to-white flex items-center justify-center h-screen">
        <div className="bg-white w-1/2 h-fit bg-gradient-to-t from-indigo-950  to-fuchsia-600 rounded-3xl shadow-2xl p-8">
          <form className="flex items-center">
            <input
              type="text"
              id="voice-search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              autoFocus
              className=" outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter the Location"
              required
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium rounded-lg "
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Search
            </button>
          </form>

          <img
            className="w-52 lg:ml-56 sm:ml-28"
            src="https://o.remove.bg/downloads/3b035dc7-7bb8-40bb-bdfa-50de1c7686e8/7ed7542a855fb802861933e0ccad8f0b-removebg-preview.png"
            alt=""
          />

          <div className="flex justify-center ">
            <div>
              <h1 className="text-6xl text-white">
                {weather ? weather.name : "Fetching current location..."}
              </h1>
            </div>
          </div>

          <div className=" flex justify-center text-white mt-5 text-lg ">
            <p>{weather ? (weather.main.temp - 273.15).toFixed(2) : ""}°C</p>
          </div>

          <div className="flex justify-center mt-6">
            <p className="text-white">
              {" "}
              Min:{" "}
              {weather?.main.temp_min
                ? (weather.main.temp_min - 273.15).toFixed(2)
                : ""}
              °C
            </p>
            <p className="text-white ml-16">
              Max:{" "}
              {weather?.main.temp_max
                ? (weather.main.temp_max - 273.15).toFixed(2)
                : ""}
              °C
            </p>
          </div>

          <div className="flex sm:gap-9 ">
            <div className="lg:ml-28 md:ml-20 w-32 h-56 border-2 border-yellow-500 mt-12 rounded-3xl shadow-2xl hover:scale-105 duration-300 cursor-pointer">
              <img
                className="w-40"
                src={`http://openweathermap.org/img/w/04n.png`}
                alt="Weather icon"
              />
              <h1 className="text-white text-lg ml-3 ">
                Humidity : {weather?.main.humidity}
              </h1>
            </div>

            <div className="w-32 h-56 border-2 border-yellow-500 mt-12 rounded-3xl shadow-2xl hover:scale-105 duration-300 cursor-pointer">
              <img className="w-32" src="/assets/pressure.png" alt="" />

              <h1 className="text-white  ml-3">
                Pressure : {weather?.main.pressure}
              </h1>
            </div>

            <div className="w-32 h-56 border-2 border-yellow-500 mt-12 rounded-3xl shadow-2xl hover:scale-105 duration-300 cursor-pointer">
              <img src="/assets/sealevel.png" alt="sea level icon" />

              <h1 className="text-white text- ml-3 ">
                Sea Level : {weather?.main.sea_level}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;

{
  /* <div>
        <img
          className="absolute top-0 left-0 w-full h-full mix-blend-lighten z-10"
          src="https://i.pinimg.com/originals/fb/04/99/fb049953437ae89baa065bcce27bd799.gif"
          alt="Lightning effect"
        />
      </div> */
}
