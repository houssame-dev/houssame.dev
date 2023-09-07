import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin, FaTwitter, FaFolderOpen } from "react-icons/fa";
import h_logo from "./images/H.png";
import "./Top.css";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { ImUser } from "react-icons/im";
import { PiCodeFill ,PiPhoneCallFill} from "react-icons/pi";

function Top() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" sticky="top">
      <Container>
        <Link to="/">
          <Navbar.Brand href="/">
            <img src={h_logo} alt="h-logo" id="h-logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" id="nav-items">
            <Link to="/" className="link-item">
              <Nav.Link href="/" className="nav-item">
                <TiHome size={15} /> Home
              </Nav.Link>
            </Link>
            <Link to="about" className="link-item">
              <Nav.Link href="#about" className="nav-item">
                <ImUser size={15} /> About
              </Nav.Link>
            </Link>
            <Link to="skills" className="link-item">
              <Nav.Link href="#skills" className="nav-item">
                <PiCodeFill size={15} /> Skills
              </Nav.Link>
            </Link>
            <Link to="projects" className="link-item">
              <Nav.Link href="#projects" className="nav-item">
                <FaFolderOpen  size={15}/> Projects
              </Nav.Link>
            </Link>
            <Link to="contact" className="link-item">
              <Nav.Link href="#contact" className="nav-item">
               <PiPhoneCallFill  size={15}/> Contact
              </Nav.Link>
            </Link>
          </Nav>
          <div className="social-icons">
            <Nav.Link href="https://twitter.com/LFC" target="_blank">
              <span>
                <FaGithub size={30} className="social-icon" />
              </span>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/ArabicLFC" target="_blank">
              <span>
                <FaLinkedin size={30} className="social-icon" />
              </span>
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/ArabicLFC" target="_blank">
              <span>
                <FaTwitter size={30} className="social-icon" />
              </span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
