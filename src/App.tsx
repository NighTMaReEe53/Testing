import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Naviagtion from "./Components/Naviagtion/Naviagtion";
import Project from "./Components/Project/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Naviagtion />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
