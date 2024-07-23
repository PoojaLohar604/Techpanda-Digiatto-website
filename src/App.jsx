import React from "react";
import About from "./Components/AboutUs/About.jsx";
import Home from "./Components/HomePage/Homecontent/Home.jsx";
import Services from "./Components/Services/Services.jsx";
import Dedicate from './Components/DedicatedDevelopers/Dedicate';
import Industries from './Components/Industries/Industries.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Blogpage from './Components/BlogPage/Blogpage';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<About />} ></Route>
        <Route path="/services" element={<Services />} ></Route>
        <Route path="/dedicateddevelopers" element={<Dedicate />} ></Route>
        <Route path="/industries" element={<Industries />} ></Route>
        <Route path="/portfolio" element={<Portfolio />} ></Route>
        <Route path="/blogpage" element={<Blogpage />} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
