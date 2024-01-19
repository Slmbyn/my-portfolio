
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Navbar.module.css'

export default function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
      <Navbar.Brand as={ScrollLink} to='landing' className='navbar-brand text-white mx-3 '>
          Selam Beyene
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggler mx-2 ' />
        <Navbar.Collapse id="responsive-navbar-nav" className='text-right mx-3 '>
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
