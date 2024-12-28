import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Education from './components/Education';



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;