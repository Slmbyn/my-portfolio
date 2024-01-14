import { FaPython, FaReact, FaFigma, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";
import { SiDjango, SiMiro, SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { BiCoinStack } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

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
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <DiPostgresql /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
    ];

    const tools = [
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Miro', icon: <SiMiro /> },
    ];

    return (
        <>
        <h2>Programming Skills</h2>
        <Row xs={2} md={2}>
            <Col md={6}>
                <h2>Languages</h2>
                {languages.map((language, idx) => (
                    <span key={idx}>
                        <div>{language.icon} {language.name}</div>
                    </span>
                ))}
            </Col>
            <Col md={6}>
                <h2>Frameworks</h2>
                {frameworks.map((framework, idx) => (
                    <span key={idx}>
                        <div>{framework.icon} {framework.name}</div>
                    </span>
                ))}
            </Col>
            {/* <Col>
                <h2>Tools</h2>
                {tools.map((tool, idx) => (
                    <span key={idx}>
                        <div>{tool.icon} {tool.name}</div>
                    </span>
                ))}
            </Col> */}
        </Row>
        </>
    );
}
