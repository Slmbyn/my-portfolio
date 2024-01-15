import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Landing.module.css';
import headshotImage from '../images/headshot.jpg';

export default function LandingPage() {
  return (
    // <Container className='text-white d-flex align-items-center justify-content-start'>
    <Container>
      <div className={`${styles['headshotcontainer']}`}>
        <img
          src={headshotImage}
          alt='Headshot'
          className='headshot img-fluid'
        />
      </div>
      <div className={`${styles['heading']}`}>
        <h1 className={`${styles['name']}`}>SELAM BEYENE</h1>
        <h1 className={`${styles['job']}`}>Full-Stack Software Engineer</h1>
      </div>
    </Container>
  );
}
