import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Challenges from "./Components/Challenges";
import Courses from "./Components/Courses";
import Testimonials from "./Components/Testimonials";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  duration: 1500,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Challenges/>
      <Courses/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
