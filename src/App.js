import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top from "./main/Top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./main/About";
import Home from "./main/Home";
import Skills from "./main/Skills";
import Projects from "./main/Projects";

function App() {
  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
