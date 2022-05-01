// or less ideally
// import { Button } from "react-bootstrap";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./components/Layout/DefaultLayout";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";

const App = () => {
  const [showComp, setShowState] = useState("home");

  const handleOnClick = (value) => {
    console.log(value);
  };

  return (
    <div className="wrapper">
      <BrowserRouter>
        <DefaultLayout>
          <div className="slider">
            <i
              class="fas fa-dot-circle"
              onClick={() => handleOnClick("home")}
            ></i>
            <i
              class="fas fa-dot-circle"
              onClick={() => handleOnClick("skills")}
            ></i>
          </div>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="about-me" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            {/* 
            {showComp === "skill" && <Skills />}
            <Projects />

            <About />

            <Contact /> */}
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
