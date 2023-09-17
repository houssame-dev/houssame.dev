import React, { useState, useEffect } from "react";
import { Container, Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { FaUser, FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { IoMail, IoLocationSharp, IoCall } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact">
      <Container className="contact-container">
        <h2 data-aos="fade-up" data-aos-duration="2000">
          Contact Me
        </h2>
        <Row>
          <Col md={6}>
            <div
              className="contact-information"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h3>
                <strong>Contact Information</strong>
              </h3>
              <hr />
              <p>
                <IoLocationSharp /> <strong>Location:</strong> Mohammedia,
                Morocco
              </p>
              <p>
                <IoCall /> <strong>Phone:</strong> (+212) 623-659049
              </p>
              <p>
                <IoMail /> <strong>Email:</strong> errjem2@gmail.com
              </p>
              <br />
              <div className="social-icons">
                <a
                  href="https://twitter.com/errjem2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="twitter-icon" size={25} />
                </a>
                <a
                  href="https://www.linkedin.com/in/houssameerrjem/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="linkedin-icon" size={25} />
                </a>
                <a
                  href="https://github.com/Errjem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" size={25} />
                </a>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div
              className="contact-form"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h3>
                <strong>Contact Form</strong>
              </h3>
              <hr />
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <InputGroup.Text>
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Type Your Name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroup.Text>
                    <IoMail />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Type Your Email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
                <br />
                <InputGroup>
                  <InputGroup.Text>
                    <BiSolidMessage />
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    name="message"
                    placeholder="Type Your Message"
                    value={message}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
                <br />
                <Button variant="light" type="submit" className="send-btn">
                  <BsSendFill /> Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
