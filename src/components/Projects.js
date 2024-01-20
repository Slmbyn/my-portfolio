import { FaPython, FaReact, FaFigma, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import { SiDjango, SiMiro, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { MdCss } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useState} from 'react';
import styles from '../styles/Project.module.css'
import strattester from '../images/strattester.jpg'
import fitforecast from '../images/fitforecast.png'
import pushstart from '../images/pushstart.png'
import snake from '../images/snake.png'


{/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /> */}


export default function Projects() {
    const [isHovered, setIsHovered] = useState(false)
    const projectInfo = [
        { title: 'StratTester',
          description: 'A web application that helps stock traders test and analyze data from various trading strategies.', 
          imageSrc: strattester, 
          github: 'https://github.com/Slmbyn/strattester',
          techStack: [<FaPython />, <IoLogoJavascript />, <SiDjango />, <FaReact />,<DiPostgresql />, <FaBootstrap/>],
        },
        { title: 'PushStart', 
          description: 'PushStart is a full-stack CRUD application that seamlessly connects car buyers & sellers.', 
          imageSrc: pushstart, 
          github: 'https://github.com/Slmbyn/PushStart',
          techStack: [<SiMongodb/>, <SiExpress />,<FaReact />, <FaNodeJs />, <IoLogoJavascript />]
        },
        { title: 'Fit-Forecast',
          description: 'Web application designed to enhance your well-being through personalized workout suggestions based on your local weather conditions.',
          imageSrc: fitforecast, 
          github: 'https://github.com/Slmbyn/Fit-Forecast', 
          site:'https://fitforecast-dc33e66f392f.herokuapp.com/',
          techStack: [<SiMongodb/>, <SiExpress />,<FaReact />, <FaNodeJs />, <IoLogoJavascript />]
        },
        { title: 'Snake',
          description: 'Snake, the timeless arcade game, is back! In snake, players control a snake with never ending hunger as it navigates through a field in search of food!',
          imageSrc: snake,
          github: 'https://github.com/Slmbyn/Snake',
          site:'https://snake-gilt-eta.vercel.app/',
          techStack: [<IoLogoJavascript />, <MdCss />, <TiHtml5 />]
        },
      ];
  return (
    <>
      <span className='text-center'>
        <h1 className={`${styles['projectTitle']}`}>PROJECTS</h1>
      </span>
      <Row xs={1} md={2} className="g-4">
        {projectInfo.map((card, idx) => (
          <span className={`${styles['cardsWrapper']}`}>
          <Col key={idx} className="mb-3">
            {/* <span className="mb-5"> */}
            <Card
              className={`${styles['project-card']} ${isHovered ? 'hovered' : ''}`}
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Card.Img variant="top" src={card.imageSrc} />
              <Card.Body>
                <Card.Title className={`${styles['cardTitle']}`}>{card.title}&nbsp;{card.techStack}</Card.Title>
                <Card.Text className={`${styles['cardDescription']}`}>{card.description}</Card.Text>
                <Card.Footer className='text-center bg-dark-subtle'>
                  <Card.Link href={card.github} target="_blank" >Github</Card.Link>
                  {card.site ? <Card.Link href={card.site} target="_blank" >Visit Site</Card.Link> :''}
                </Card.Footer>
              </Card.Body>
            </Card>
            {/* </span> */}
          </Col>
          </span>
        ))}
      </Row>
    </>
  );
}
