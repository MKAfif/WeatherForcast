import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {


  const navigate = useNavigate();

  const button = () => {
    navigate("/weather");
  };

  return (
    <div>

         {/* <div>
             <img
          className="absolute top-0 left-0 w-full h-full mix-blend-lighten z-10"
          src="https://i.pinimg.com/originals/fb/04/99/fb049953437ae89baa065bcce27bd799.gif"
          alt="Lightning effect"
        />
        </div>  */}

        
      <div className="bg-gradient-to-b from-violet-700 via-fuchsia-600 to-white w-screen h-screen flex justify-center items-center border border-black">
     
        <div className="bg-white w-1/2 h-5/6 bg-gradient-to-t from-indigo-950  to-fuchsia-600 rounded-3xl shadow-2xl ">
          <div className="flex justify-center ">
            <img
              className="mix-blend-lighten "
              src="https://i.pinimg.com/originals/bd/72/d1/bd72d10c741dde2ce2684577ffa0d86f.gif"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-center font-bold font-sans text-white text-6xl">
              Weather
            </h1>

            <h1 className="text-center font-bold font-serif text-amber-300 text-6xl">
              Forecast
            </h1>
          </div>

          <div className="text-center mt-8  ">

            <button
              onClick={button}
              className=" hover:scale-105 duration-300 bg-amber-500 text-slate-900 w-52 h-24 rounded-3xl text-4xl font-serif"
            >
              Get Started
            </button>

          </div>
        </div>
      </div>
      
   
    </div>
  );
};

export default Home;
