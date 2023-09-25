import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const authorName = "Houssame Errjem";
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright" data-aos="fade-right" data-aos-duration="2000">
          &copy;
          <span>
            {" "}
            {currentYear} {authorName}. All Rights Reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
