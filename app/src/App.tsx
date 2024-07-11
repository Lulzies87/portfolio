import Contact from "./components/Contact";
import Cover from "./components/Cover";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import "./App.css";

export default function App() {
  return (
    <>
        <Header />
        <Cover />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
    </>
  );
}
