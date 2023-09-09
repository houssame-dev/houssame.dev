import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

function Contact() {
  return (
    <Container className="contact-container">
      <Row>
        <Col md={6}>
          <h4>Contact Information</h4>
          <p>
            <strong>Name:</strong> Houssame Errjem
            <br />
            <strong>Email:</strong> errjem2@gmail.com
            <br />
            <strong>Phone:</strong> (+212) 623-659-049
            <br />
            <strong>Address:</strong> Morocco
            <br />
          </p>
        </Col>
        <Col md={6}>
          <h4>Send a Message</h4>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message here"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
