import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Input from "./../../../components/common/Input";
import SubmitButton from "../../../components/common/SubmitButton";

import AuthService from "./../../../services/authService";
import backgroundUpperAsset from "./../../../assets/images/auth-background-asset1.svg";
import backgroundLowerAsset from "./../../../assets/images/auth-background-asset2.svg";

const LogIn = ({ token, saveToken }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const credentials = { ...user };
    const { name, value } = input;
    credentials[name] = value;
    setUser(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = (await AuthService.login(user)).data;
      localStorage.setItem("snazzyAuthToken", authToken);
      saveToken(authToken);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (token) return <Redirect to="/" />;

  return (
    <Row className="d-flex flex-column text-center ">
      <Col className="mr-auto ml-auto mt-5 text-left position-relative form-wrapper">
        <img
          className="position-absolute"
          style={{ left: "-20px", zIndex: "-1" }}
          src={backgroundUpperAsset}
          alt="snazzy"
        />
        <img
          className="position-absolute"
          style={{ bottom: "20px", right: "-20px", zIndex: "-1" }}
          src={backgroundLowerAsset}
          alt="snazzy"
        />
        <h2 className="mb-5">Sign in to your account</h2>
        <Form className="mt-5" onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            onChange={handleChange}
            label="Email"
          />
          <Input
            name="password"
            type="password"
            onChange={handleChange}
            label="Password"
            additionalButton="Forgot password?"
          />
          <SubmitButton title="Sign in" />
        </Form>
      </Col>
      <div className=" mt-5">
        <p>
          Dont have an account?
          <span>
            {" "}
            <Link to="/register" className="linkToOtherAuth">
              Sign up
            </Link>
          </span>
        </p>
      </div>
    </Row>
  );
};

export default LogIn;
