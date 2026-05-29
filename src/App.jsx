// src/App.jsx

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-dark min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <Experience />

      <Testimonials />

      <Contact />

      <Footer />

    </div>
  );
}