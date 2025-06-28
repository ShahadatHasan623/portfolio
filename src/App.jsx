import { useEffect } from "react";
import "./App.css";
import HeroSection from "./pages/Hero/HeroSection";
import Navbar from "./sheard/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import TotalCount from "./pages/TotalCount/TotalCount";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,
      mirror: false, // scroll করলে একবার animate হবে
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <TotalCount></TotalCount>
    </>
  );
}

export default App;
