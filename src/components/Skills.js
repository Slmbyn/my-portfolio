import { FaPython, FaReact, FaFigma, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import { SiDjango, SiMiro, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { BiCoinStack } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
import styles from '../styles/Skills.module.css';

export default function Skills() {
    const languages = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <IoLogoJavascript /> },
        { name: 'HTML', icon: <TiHtml5 /> },
        { name: 'CSS', icon: <IoLogoCss3 /> },
        { name: 'SQL', icon: <BiCoinStack /> },
    ];

    const frameworks = [
        { name: 'React', icon: <FaReact /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> },
    ];
    
    const tools = [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <DiPostgresql /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Miro', icon: <SiMiro /> },
    ];

    return (
        <>
        <span className='d-none d-md-block'>
            <span className={`${styles['skillsSectionWrapper']}`}>
                <h1 className={`${styles['skillsTitle']}`}>
                            SKILLS
                </h1>
            <Row xs={2} md={2}>
                <Col md={4}>
                    <span className={`${styles['languageWrapper']}`}>
                        {/* <h2 className={`${styles['languages']}`}>Languages</h2> */}
                        <span className={`${styles['languageList']}`}>
                            {languages.map((language, idx) => (
                                <span key={idx}>
                                    <div className={`${styles['languageItem']}`}>{language.icon} {language.name}</div>
                                </span>
                            ))}
                        </span>
                    </span>
                </Col>
                <Col md={4}>
                    <span className={`${styles['frameworkWrapper']}`}>
                        {/* <h2 className={`${styles['frameworks']}`}>Frameworks</h2> */}
                        <span className={`${styles['frameworkList']}`}>
                            {frameworks.map((framework, idx) => (
                                <span key={idx}>
                                    <div className={`${styles['frameworkItem']}`}>{framework.icon} {framework.name}</div>
                                </span>
                            ))}
                        </span>
                    </span>
                </Col>
                <Col md={4}>
                    <span className={`${styles['toolsWrapper']}`}>
                        <span className={`${styles['toolsList']}`}>
                            {tools.map((tool, idx) => (
                                <span key={idx}>
                                    <div className={`${styles['toolItem']}`}>{tool.icon} {tool.name}</div>
                                </span>
                            ))}
                        </span>
                    </span>
                </Col>
            </Row>
            </span>
        </span>

{/* MOBILE SCREEN */}
        <span className='d-block d-md-none'>
            <span className="text-white text-center">
                <h1 
                    className="mt-4"
                    style={{
                        textTransform: 'uppercase',
                        fontFamily:'"Lato", sans-serif',
                        fontWeight: '400',
                        fontSize: '55px'
                    }}
                    >
                        Skills
                    </h1>
                <div 
                    className="mt-3 mb-5 "
                    style={{
                        fontSize: '20px'
                    }}
                    >
                <Row xs={2} md={2}>
                    <Col md={6}>
                        <span>
                            <span>
                                {languages.map((language, idx) => (
                                    <span key={idx}>
                                        <div
                                            style={{
                                                fontFamily: '"Open Sans", sans-serif',
                                            }}
                                        >{language.icon} {language.name}</div>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </Col>
                    <Col md={6}>
                        <span>
                            <span>
                                {frameworks.map((framework, idx) => (
                                    <span key={idx}>
                                        <div>{framework.icon} {framework.name}</div>
                                    </span>
                                ))}
                            </span>
                        </span>
                    </Col>
                </Row>
                <Row className="my-3">
                    <span>
                        <span>
                            {tools.map((tool, idx) => (
                                <span key={idx}>
                                    <div>{tool.icon} {tool.name}</div>
                                </span>
                            ))}
                        </span>
                    </span>
                </Row>
                </div>
            </span>
        </span>
        </>
    );
}
