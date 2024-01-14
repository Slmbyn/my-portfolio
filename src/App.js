// LIBRARY IMPORTS
import { Parallax } from 'react-parallax';


// IMAGE IMPORTS
import beach from './images/beach.jpg'
import daytrade from './images/daytrade.jpg'
import ready from './images/ready.jpg'

// COMPONENT IMPORTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';

// CSS IMPORTS
import './styles/App.css';

function App() {
  return (
    <div className="App">

      <head>
        <title> Selam Beyene - Software Engineer</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </head>

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
            Reverse Parallax
          </div>
        </div>
      </Parallax>

{/* Projects */}
      <Parallax strength={200} bgImage={ready}>
        <div className='projects'>
          <div className='text-content'>
            Reverse Parallax
          </div>
        </div>
      </Parallax>

    </div>
  );
}

export default App;
