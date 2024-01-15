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
                        <p>Hey there! I&apos;m Selam, and my journey into software development has been a bit of a zig-zag...</p>
                        <p>Beyond the professional stuff, I love to socialize, travel, and can chat for hours about the Golden State Warriors and football. Fun fact? Just clinched my first-ever fantasy football league championship!
                            If you are interested in hearing a little more about the journey that led me here, feel free to take a peek</p>
                    </div>
                </div>
            </div>
        </Col>
        <Col></Col>
        <Col></Col>
        </>
    );
}
