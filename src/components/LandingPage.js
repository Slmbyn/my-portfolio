import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Landing.module.css';
import headshotImage from '../images/headshot.jpg';
import profilePic from '../images/green-profile.jpg';

export default function LandingPage() {
  return (
    // <Container className='text-white d-flex align-items-center justify-content-start'>
    <>
    <div className='d-none d-md-block'>
      <div className={`${styles['headshotcontainer']}`}>
        <img
          src={profilePic}
          alt='Headshot'
          className='headshot img-fluid img-thumbnail'
        />
      </div>
      <div className={`${styles['heading']}`}>
        <h1 className={`${styles['name']}`}>SELAM BEYENE</h1>
        <h2 className={`${styles['job']}`}>Full-Stack Software Engineer</h2>
      </div>
    </div>

    <div className='d-block d-md-none'>
      <div className='d-flex justify-content-center mt-5 '>
        <img
          src={profilePic}
          alt='Headshot'
          className='headshot img-fluid img-thumbnail'
          style={{width:'80%'}}
        />
      </div>
      <div className='text-white text-center mt-5 '>
        <h1 style={{fontSize:'50px'}}>SELAM BEYENE</h1>
        <h2 className='mt-3' style={{fontSize:'30px'}}>Full-Stack Software Engineer</h2>
      </div>
    </div>
    </>
  );
}
