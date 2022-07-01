import React from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Pricing from "./Pricing";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
    </div>
  );
};

export default Home;
