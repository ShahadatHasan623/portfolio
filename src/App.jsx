import { useEffect } from "react";
import "./App.css";
import HeroSection from "./pages/Hero/HeroSection";
import Navbar from "./sheard/Navbar";

import TotalCount from "./pages/TotalCount/TotalCount";
import Skills from "./pages/Skills/Skills";
function App() {
 
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <TotalCount></TotalCount>
      <Skills id="skill"></Skills>
    </>
  );
}

export default App;
