import '../App.css';
import About from './About';
import AboutMe from './AboutMe';
import Experience from './Experience';
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <AboutMe/>
      <Experience/>
    </div>
  );
}

export default App;
