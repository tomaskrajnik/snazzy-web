import React from "react";
import { Col } from "react-bootstrap";

import "./../Auth/Auth.scss";
import logo from "./../../assets/images/snazzy_logo_auth.svg";

const NotFound = () => {
  return (
    <div className="auth d-flex flex-column pb-5">
      <div className="auth__background-image"></div>
      <Col className="text-center flex-grow-0 auth-snazzy-logo">
        <img src={logo} style={{ width: "130px" }} alt="logo"></img>
      </Col>
      <Col className="not-found-block" style={{ marginTop: "150px" }}>
        <div>
          <h1>
            404. <span>That's an error.</span>
          </h1>
          <p>The requested URL does not exist or has been moved.</p>
        </div>
      </Col>
      <Col className="backtoSnazzy text-center flex-grow-0 mt-auto mb-4">
        <a href="#">snazzy.com</a>
      </Col>
    </div>
  );
};

export default NotFound;
