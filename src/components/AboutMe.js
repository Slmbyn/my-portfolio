import React from 'react';
import styles from '../styles/AboutMe.module.css';
import { Col } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <>
            <div className='d-none d-md-block'>
                            <div className='d-flex justify-content-center text-center'>
                                <h1 className={`${styles['aboutMe']}`}>About Me</h1>
                            </div>
                <Col>
                    <div className={`${styles.aboutMeContainer}`}>
                        <div>
                            <div className={`${styles['aboutMeText']}`}>
                                <p>My journey into software development has been a bit of a zig-zag. Starting with a finance degree, I dove into the banking world, handling everything from lending to investments. I then took a detour into the wild world of day trading, learning the ropes on my own.</p>
                                <p>I started learning Python with the idea that it would be a useful tool to help my trading, little did I know that I would become so enamored with it that I&apos;d complete an immersive software engineering bootcamp.</p>
                                <p>Beyond work, I&apos;m all about socializing, traveling, and can talk endlessly about the Golden State Warriors and football! </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col></Col>
                <Col></Col>
            </div>
            {/* MOBILE */}
            <div className='d-block d-md-none text-white px-2 rounded-3'>
                <div>
                    <div 
                        className='d-flex justify-content-center mt-5 text-center'
                        >
                        <h1 
                            className='rounded py-2 mb-3'
                            style={{
                                // backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                // width:'50%'
                                textTransform: 'uppercase',
                                fontFamily:'"Lato", sans-serif',
                                fontWeight: '400',
                                fontSize: '55px'
                            }}
                        >
                            About Me</h1>
                    </div>
                    <div 
                        className='px-3 py-3 rounded'
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            fontFamily: '"Open Sans", sans-serif',
                            fontWeight: '300',
                            fontStyle: 'normal',
                        }}
                    >
                        <p>My journey into software development has been a bit of a zig-zag. Starting with a finance degree, I dove into the banking world, handling everything from lending to investments. I then took a detour into the wild world of day trading, learning the ropes on my own.</p>
                        <p>I started learning Python with the idea that it would be a useful tool to help my trading, little did I know that I would become so enamored with it that I&apos;d complete an immersive software engineering bootcamp.</p>
                        <p>Beyond work, I&apos;m all about socializing, traveling, and can talk endlessly about the Golden State Warriors and football! </p>
                    </div>
                </div>
            </div>
        </>
    );
}
