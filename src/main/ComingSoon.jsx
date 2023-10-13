import React from "react";
import "./ComingSoon.css";
import logo from "./images/my-logo-black.png";

function ComingSoon() {
  return (
    <div className="comingsoon">
      <div className="comingsoon2">
        <div className="div-img">
          <img src={logo} alt="logo" />
        </div>
        <h1>coming soon...</h1>
      </div>
    </div>
  );
}

export default ComingSoon;
