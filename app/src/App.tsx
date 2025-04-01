import Header from "./components/Header/Header.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Experience from "./components/Experience/Experience.tsx";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </>
  );
}
