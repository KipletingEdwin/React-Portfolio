import '../App.css';
import About from './About';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Experience from './Experience';
import NavBar from './NavBar';
import Projects from './Projects';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
