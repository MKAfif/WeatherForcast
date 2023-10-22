import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
