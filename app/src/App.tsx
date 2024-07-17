import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Cover />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
