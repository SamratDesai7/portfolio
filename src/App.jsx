// src/App.jsx
import React from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />

 <main className="pt-20">
  <Home />
  <About />
  <Projects />
  <Contact />
</main>

      <Footer />
    </>
  );
};

export default App;
