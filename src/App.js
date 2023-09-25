import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top from "./main/Top";
import Home from "./main/Home";
import About from "./main/About";
import Skills from "./main/Skills";
import Projects from "./main/Projects";
import Contact from "./main/Contact";
import Footer from "./main/Footer";

function App() {
  return (
    <div className="app">
      <Top />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
