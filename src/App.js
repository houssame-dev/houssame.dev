import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top from "./main/Top";
import Home from "./main/Home";
import About from "./main/About";
import Contact from "./main/Contact";
import { ThemeProvider } from "./main/ThemeContext";
import Services from "./main/Services";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <ThemeProvider>
        <Top />
        <Home />
        <About />
        <Services />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
