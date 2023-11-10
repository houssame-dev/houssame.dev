import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { BsSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import "./Contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

function Contact() {
  const currentYear = new Date().getFullYear();
  const authorName = "Houssame";
  const { isDarkMode } = useTheme();
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send Message");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");
    try {
      const response = await emailjs.send(
        "service_5g86bvb",
        "template_b604zli",
        formData,
        "7eh_QUyc94E3Tno_0"
      );

      console.log("Message sent successfully:", response);
      Swal.fire({
        position: "center",
        icon: "success",
        color: "#000000",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 3000,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Message sending failed:", error);
      Swal.fire("Error", "Message sending failed!", "error");
    } finally {
      setButtonText("Send Message");
      setLoading(false);
    }
  };
  return (
    <div id="contact">
      <div className="contact" id={isDarkMode ? "dark-mode" : "light-mode"}>
        <Container fluid>
          <motion.h1
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            Work With Me , Contact Me , Or Just Say HELLO
          </motion.h1>
          <Row>
            <Col md={6} className="order-1">
              <motion.div
                className="contact-form"
                initial={{
                  opacity: 0,
                  x: -200,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <Form onSubmit={handleSubmit} className="form">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    value={message}
                    onChange={handleInputChange}
                    required
                    className="textarea"
                  />
                  <Button
                    variant="light"
                    type="submit"
                    className="send-btn"
                    disabled={loading}
                  >
                    <BsSendFill /> <span>{buttonText}</span>
                  </Button>
                </Form>
              </motion.div>
            </Col>
            <Col md={6} className="order-2">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="informations">
                  <div className="location">
                    <span>
                      <FaLocationDot />
                    </span>
                    <span>Mohammedia, Morocco</span>
                  </div>
                  <div className="phone-number">
                    <FaPhone /> (+212) 623-659049
                  </div>
                  <div className="gmail">
                    <MdEmail /> houssame.dev@gmail.com
                  </div>
                </div>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/houssame-errjem-93099a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                  <a
                    href="https://github.com/houssame-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaGithub size={15} />
                  </a>
                  <a
                    href="https://twitter.com/houssamedev"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaXTwitter size={15} />
                  </a>
                </div>
                <div className="copyright">
                  &copy; {currentYear} {authorName}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
