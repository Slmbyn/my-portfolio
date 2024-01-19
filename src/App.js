// LIBRARY IMPORTS
import { Parallax } from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';

// IMAGE IMPORTS
import beach from './images/beach.jpg'
import daytrade from './images/daytrade.jpg'
import ready from './images/ready.jpg'
import landingbackground from './images/landingbackground.jpg'
import black from './images/black.jpg'
import vsc from './images/vscodebg.jpg'
import fullVsc from './images/fullvscbg.png'
import starbg from './images/starbg.png'

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
    <span className='d-none d-md-block '>
      <Parallax 
        strength={600} 
        bgImage={starbg}
        bgImageStyle={{
          width: '100%',
          height: '100vh',
        }}
      >
        <div className='content'>
          <div className='landing'>
            <LandingPage />
          </div>
        </div>
      </Parallax>
    </span>
    {/* LANDING FOR SMALL SCREENS */}
    <span className='d-block d-md-none' style={{height:'95vh'}}>
      <Parallax 
          strength={350} 
          bgImage={starbg}
          bgImageStyle={{
            backgroundSize: 'cover'
          }}
      >
        <div className='content'>
          <div className='landing'>
            <LandingPage />
          </div>
        </div>
      </Parallax>
    </span>

{/* ABOUT ME */}
      <span className='d-none d-md-block '>
        <Parallax strength={600} bgImage={beach}>
          <div className='content'>
            <div className='about'>
              <AboutMe />
            </div>
          </div>
        </Parallax>
      </span>
{/* aboutme for mobile screen */}
      <span className='d-block d-md-none' style={{height:'75vh'}}>
        <Parallax strength={600} bgImage={beach}>
          <div className='content'>
            <div className='about'>
              <AboutMe />
            </div>
          </div>
        </Parallax>
      </span>

{/* SKILLS */}
<span className='d-none d-md-block '>
      <Parallax 
        strength={-250} 
        bgImage={starbg}
        bgImageStyle={{
          width: '100%',
          height: '100vh',
        }}
        >
        <div className='skillsContent'>
          <div className='skills'>
            <Skills />
          </div>
        </div>
      </Parallax>
</span>
<span className='d-block d-md-none' style={{height:'45vh'}}>
      <Parallax 
        strength={-250} 
        bgImage={starbg}
        bgImageStyle={{
          width: '100%',
          height: '100vh',
        }}
        >
        <div className='skillsContent'>
          <div className='skills'>
            <Skills />
          </div>
        </div>
      </Parallax>
</span>

{/* Projects */}
      <span className='d-none d-md-block '>
        <Parallax strength={200} bgImage={fullVsc} bgImageStyle={{width: '100%', height: '90%'}}>
          <div className='projectsContent'>
            <div className='projects'>
              <Projects />
            </div>
          </div>
        </Parallax>
      </span>

      {/* mobile screen */}
      <span className='d-block d-md-none'>
      <Parallax strength={200} bgImage={black} bgImageStyle={{width: '100%', height: '90%'}}>
        <div className='projectsContent'>
          <div className='projects'>
            <Projects />
          </div>
        </div>
      </Parallax>
      </span>

    </div>
  );
}

export default App;
