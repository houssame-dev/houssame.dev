import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithub, FaLinkedin, FaTwitter, FaFolderOpen } from "react-icons/fa";
import h_logo from "./images/H.png";
import "./Top.css";
import { Outlet, Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { ImUser } from "react-icons/im";
import { PiCodeFill, PiPhoneCallFill } from "react-icons/pi";

function Top() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" id="navbar" sticky="top">
        <Container>
          <Link to="/">
            <img src={h_logo} alt="h-logo" id="h-logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggler" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" id="nav-items">
              <Link to="/" className="link-item">
                <span className="nav-item">
                  <TiHome size={15} /> Home
                </span>
              </Link>
              <Link to="/about" className="link-item">
                <span className="nav-item">
                  <ImUser size={15} /> About
                </span>
              </Link>
              <Link to="/skills" className="link-item">
                <span className="nav-item">
                  <PiCodeFill size={15} /> Skills
                </span>
              </Link>
              <Link to="/projects" className="link-item">
                <span className="nav-item">
                  <FaFolderOpen size={15} /> Projects
                </span>
              </Link>
              <Link to="/contact" className="link-item">
                <span className="nav-item">
                  <PiPhoneCallFill size={15} /> Contact
                </span>
              </Link>
            </Nav>
            <div className="social-icons">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span>
                  <FaGithub size={30} className="social-icon" />
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span>
                  <FaLinkedin size={30} className="social-icon" />
                </span>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <span>
                  <FaTwitter size={30} className="social-icon" />
                </span>
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Top;
