import Cover from "./components/Cover/Cover.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Header from "./components/Header/Header.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import "./App.scss";

export default function App() {
  return (
    <>
      <Header />
      <Cover />
      <Projects />
      <Skills />
      <Experience />
    </>
  );
}
