import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top from "./main/Top";
import Home from "./main/Home";
import About from "./main/About";
import Work from "./main/Work";
import Services from "./main/Services";
import Contact from "./main/Contact";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app">
      <Top />
      <Home />
      <About />
      <Work />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
