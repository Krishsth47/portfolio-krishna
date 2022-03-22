// or less ideally
// import { Button } from "react-bootstrap";
import "./App.css";
import { DefaultLayout } from "./components/Layout/DefaultLayout";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";

const App = () => {
  return (
    <div className="wrapper">
      <DefaultLayout>
        <Skills />

        <Projects />

        <About />

        <Contact />
      </DefaultLayout>
    </div>
  );
};

export default App;
