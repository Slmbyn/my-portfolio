import './styles/App.css';
import { Parallax } from 'react-parallax';
import beach from './images/beach.jpg'
import daytrade from './images/daytrade.jpg'
import ready from './images/ready.jpg'

function App() {
  return (
    <div className="App">

{/* LANDING */}
      <Parallax strength={200} bgImage={beach}>
        <div className='content'>
          <div className='text-content'>
            Normal Parallax
          </div>
        </div>
      </Parallax>

{/* ABOUT ME */}
      <Parallax strength={600} bgImage={daytrade}>
        <div className='content'>
          <div className='text-content'>
            Blur Parallax
          </div>
        </div>
      </Parallax>

{/* SKILLS */}
      <Parallax strength={-200} bgImage={ready}>
        <div className='content'>
          <div className='text-content'>
            Reverse Parallax
          </div>
        </div>
      </Parallax>

{/* Projects */}
      <Parallax strength={200} bgImage={ready}>
        <div className='content'>
          <div className='text-content'>
            Reverse Parallax
          </div>
        </div>
      </Parallax>

    </div>
  );
}

export default App;
