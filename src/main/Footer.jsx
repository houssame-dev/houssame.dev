import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const authorName = "Houssame.";
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">
          <span>
            &copy; {currentYear} {authorName}
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
