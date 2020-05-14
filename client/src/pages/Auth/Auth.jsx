import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import { Col } from "react-bootstrap";

import "./Auth.scss";
import logo from "./../../assets/images/snazzy_logo_onboarding.svg";

const Auth = ({ token, saveToken }) => {
  return (
    <div className="auth d-flex flex-column">
      <div className="auth__background-image"></div>
      <Col className="text-center mt-5 flex-grow-0">
        <img src={logo} style={{ width: "110px" }} alt="logo"></img>
      </Col>
      <Switch>
        <Route path="/auth/register">
          <Register token={token} saveToken={saveToken} />
        </Route>
        <Route path="/auth/log-in">
          <LogIn token={token} saveToken={saveToken} />
        </Route>
      </Switch>
      <Col className="backtoSnazzy text-center flex-grow-0 mt-auto mb-4">
        <a href="#">snazzy.com</a>
      </Col>
    </div>
  );
};

export default Auth;
