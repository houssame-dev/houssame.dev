import React, { useEffect } from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RiDownloadCloudFill, RiWhatsappFill } from "react-icons/ri";
import cv from "./images/My-CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const showNumber = () => {
    window.open("tel:+212623659049");
  };
  const handleDownloadClick = () => {
    toast.success("CV downloaded successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home">
      <Container className="home-container">
        <ToastContainer />
        <Row>
          <Col>
            <h1>
              <div>hi, it's</div>
              <div>HOUSSAME</div>
            </h1>
            <p>a WEB DEVELOPER</p>
            <div className="div-buttons">
              <Button
                variant="light"
                id="btn1"
                href={cv}
                download
                onClick={handleDownloadClick}
              >
                <RiDownloadCloudFill /> Download Cv
              </Button>
              <Button variant="light" id="btn2" onClick={showNumber}>
                <RiWhatsappFill /> Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
