import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Landing.module.css';
import headshotImage from '../images/headshot.jpg';
import profilePic from '../images/green-profile.jpg';

export default function LandingPage() {
  return (
    // <Container className='text-white d-flex align-items-center justify-content-start'>
    <>
    <div className='d-none d-md-block landingWrapper'>
      <div className={`${styles['headshotcontainer']}`}>
        <img
          src={profilePic}
          alt='Headshot'
          className='headshot img-fluid img-thumbnail'
        />
      </div>
      <div className={`${styles['heading']}`}>
        <div className='nameWrapper'>
          <h1 className={`${styles['name']}`}>&nbsp;&nbsp;Selam Beyene&nbsp;&nbsp;</h1>
        </div>
        <h2 className={`${styles['job']}`}>Full-Stack Software Engineer</h2>
      </div>
    </div>
{/* mobile screen */}
    <div className='d-block d-md-none'>
      <div className='d-flex justify-content-center mt-5 '>
        <img
          src={profilePic}
          alt='Headshot'
          className='headshot img-fluid img-thumbnail mb-3 '
          style={{width:'70%'}}
        />
      </div>
      <div className='text-white text-center mt-5 '>
        <h1  
          className='mx-4 mb-3 py-2' 
          style={{
            fontSize:'45px',
            fontFamily:'"Lato", sans-serif',
            fontWeight: '400',
            borderTop: '1.7px solid white',
            borderBottom: '1.7px solid white',
          }}>SELAM BEYENE</h1>
        <h2 
          className='mt-3' 
          style={{
            fontSize:'25px',
            fontFamily: '"Open Sans", sans-serif',
          }}>Full-Stack Software Engineer</h2>
      </div>
    </div>
    </>
  );
}
