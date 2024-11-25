import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Customizer from "./Customizer";
import Canvas from '../../canvas';

const Tshirt = () => {

  return (
    
    <main className="app transition-all ease-in">
    <Home/>
    <Canvas />
    <Customizer />
  </main>
  );
};

export default Tshirt;