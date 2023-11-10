import React, { useState } from "react";
import "./Top.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { VscChromeClose } from "react-icons/vsc";
import { TfiMenu } from "react-icons/tfi";
import { ImFolderOpen } from "react-icons/im";
import { FaPhone, FaUserTie } from "react-icons/fa6";
import {
  MdLightMode,
  MdDarkMode,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

function Top() {
  const { toggleDarkMode } = useTheme();
  const { isDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const handleNavItemClick = () => {
    setExpanded(false);
  };
  const handleNavbarBrandClick = () => {
    handleNavItemClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Conditionally set the logo based on the dark or light mode
  const logo = isDarkMode
    ? require("./images/my-logo-white.png")
    : require("./images/my-logo-black.png");

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navbar"
      expanded={expanded}
      fixed="top"
      id={isDarkMode ? "dark-mode" : "light-mode"}
    >
      <Container fluid>
        <Navbar.Brand>
          <motion.img
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
            src={logo}
            alt="logo"
            className="logo"
            onClick={handleNavbarBrandClick}
          />
        </Navbar.Brand>
        <motion.div
          className="switch-mode-mobile"
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1, delay: 0 }}
          viewport={{ once: true }}
        >
          <label className="switch">
            <input type="checkbox" className="cb" onChange={toggleDarkMode} />
            <span className="toggle">
              <span className="left">
                <MdLightMode size={20} />
              </span>
              <span className="right">
                <MdDarkMode size={20} />
              </span>
            </span>
          </label>
        </motion.div>
        {expanded ? (
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="toggler"
              onClick={() => setExpanded(!expanded)}
              id={isDarkMode ? "dark-mode" : "light-mode"}
            >
              <VscChromeClose />
            </Navbar.Toggle>
          </motion.div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="toggler"
              onClick={() => setExpanded(!expanded)}
              id={isDarkMode ? "dark-mode" : "light-mode"}
            >
              <TfiMenu />
            </Navbar.Toggle>
          </motion.div>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, delay: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="#about"
                onClick={handleNavItemClick}
                id={isDarkMode ? "dark-mode" : "light-mode"}
              >
                <FaUserTie /> About
              </a>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="#projects"
                onClick={handleNavItemClick}
                id={isDarkMode ? "dark-mode" : "light-mode"}
              >
                <ImFolderOpen /> Projects
              </a>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="#services"
                onClick={handleNavItemClick}
                id={isDarkMode ? "dark-mode" : "light-mode"}
              >
                <MdOutlineMiscellaneousServices /> Services
              </a>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                onClick={handleNavItemClick}
                id={isDarkMode ? "dark-mode" : "light-mode"}
              >
                <FaPhone /> Contact
              </a>
            </motion.div>
          </Nav>
          <motion.div
            className="switch-mode-desktop"
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            <label className="switch">
              <input type="checkbox" className="cb" onChange={toggleDarkMode} />
              <span className="toggle">
                <span className="left">
                  <MdLightMode size={20} />
                </span>
                <span className="right">
                  <MdDarkMode size={20} />
                </span>
              </span>
            </label>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
