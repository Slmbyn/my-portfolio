import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Landing.module.css';
import headshotImage from '../images/headshot.jpg';
import profilePic from '../images/green-profile.jpg';

export default function LandingPage() {
  return (
    // <Container className='text-white d-flex align-items-center justify-content-start'>
    <Container>
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
    </Container>
  );
}
