import React, { useState } from "react";
import { Container, Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import { FaUser, FaXTwitter, FaGithub } from "react-icons/fa6";
import { IoMail, IoLocationSharp, IoCall } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

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

    emailjs
      .send(
        "service_5g86bvb",
        "template_b604zli",
        formData,
        "7eh_QUyc94E3Tno_0"
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          toast.success("Message sent successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Message sending failed:", error);
          toast.error("Message sending failed !", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      );
  };

  return (
    <div id="contact">
      <Container className="contact-container">
        <ToastContainer />
        <h2>Contact Me</h2>
        <Row>
          <Col md={6} className="order-2">
            <div className="contact-information">
              <h3>
                <strong>Contact Information</strong>
              </h3>
              <hr />
              <p>
                <IoLocationSharp /> Mohammedia, Morocco
              </p>
              <p>
                <IoCall /> (+212) 623-659049
              </p>
              <p>
                <IoMail /> houssame.dev@gmail.com
              </p>
              <br />
              <div className="social-icons">
                <a
                  href="https://twitter.com/houssamedev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="twitter-icon" size={25} />
                </a>
                <a
                  href="https://github.com/houssame-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="github-icon" size={25} />
                </a>
              </div>
              <Footer />
            </div>
          </Col>
          <Col md={6} className="order-1">
            <div className="contact-form">
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
