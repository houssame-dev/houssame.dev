import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top from "./main/Top";
import Home from "./main/Home";
import About from "./main/About";
import Contact from "./main/Contact";
import { ThemeProvider } from "./main/ThemeContext";
import Services from "./main/Services";
import Loading from "./main/Loading";
import Projects from "./main/Projects";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider>
          <Top />
          <Home />
          <About />
          <Projects />
          <Services />
          <Contact />
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;
