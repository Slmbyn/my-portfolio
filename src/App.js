// LIBRARY IMPORTS
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMAGE IMPORTS
import beach from './images/beach.jpg'
import daytrade from './images/daytrade.jpg'
import ready from './images/ready.jpg'

// COMPONENT IMPORTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

// CSS IMPORTS
import './styles/App.css';

function App() {
  return (
    <div className="App">

      <Navbar />

{/* LANDING */}
      <Parallax strength={200} bgImage={daytrade}>
        <div className='content'>
          <div className='landing'>
            <LandingPage />
          </div>
        </div>
      </Parallax>

{/* ABOUT ME */}
      <Parallax strength={600} bgImage={beach}>
        <div className='content'>
          <div className='about'>
            <AboutMe />
          </div>
        </div>
      </Parallax>

{/* SKILLS */}
      <Parallax strength={-200} bgImage={ready}>
        <div className='content'>
          <div className='skills'>
            <Skills />
          </div>
        </div>
      </Parallax>

{/* Projects */}
      <Parallax strength={200} bgImage={ready}>
        <div className='content'>
          <div className='projects'>
            <Projects />
          </div>
        </div>
      </Parallax>

    </div>
  );
}

export default App;
