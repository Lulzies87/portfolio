import Contact from "./components/Contact/Contact.tsx";
import Cover from "./components/Cover/Cover.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Header from "./components/Header/Header.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import About from "./components/About/About.tsx";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Cover />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
