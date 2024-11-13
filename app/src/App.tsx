import Contact from "./components/Contact/Contact";
import Cover from "./components/Cover/Cover";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
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
