
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand as={ScrollLink} to='landing'>
          Selam Beyene
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ScrollLink} to='about'>About</Nav.Link>
            <Nav.Link as={ScrollLink} to='skills'>Skills</Nav.Link>
            <Nav.Link as={ScrollLink} to='projects'>Projects</Nav.Link>
            {/* <Nav.Link as={ScrollLink} to='contact'>Contact Me</Nav.Link> */}
          </Nav>
          <Nav>
            <a href='https://github.com/Slmbyn' rel="noopener noreferrer" target="_blank" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
              <FaGithub size={30} />
            </a>
            <a href='https://www.linkedin.com/in/selambeyene/' rel="noopener noreferrer" target="_blank" className="nav-link" style={{ color: 'white', textDecoration: 'none' }}>
              <FaLinkedin size={30} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
