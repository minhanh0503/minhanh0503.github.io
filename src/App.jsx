// import { useState } from "react";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionWrapper from "./components/SectionWrapper";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <SectionWrapper>
        <About />
      </SectionWrapper>

      <Education />

      <SectionWrapper>
        <Skills />
      </SectionWrapper>

      <SectionWrapper>
        <Experience />
      </SectionWrapper>

      <SectionWrapper>
        <Projects />
      </SectionWrapper>

      <SectionWrapper>
        <Contact />
      </SectionWrapper>

      <Footer />
    </>
  );
}

export default App;
