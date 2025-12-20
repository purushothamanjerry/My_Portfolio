import HeaderSection from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
export default App;
