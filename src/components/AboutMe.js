import React from 'react';
import styles from '../styles/AboutMe.module.css';
import { Col } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <>
        <Col>
            <div className={`${styles.aboutMeContainer} rounded-4 `}>
                <div>
                    <h1 className={`${styles['aboutMe']}`}>About Me</h1>
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
        </>
    );
}
