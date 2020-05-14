import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import AuthService from "./../../../services/authService";

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
    <Row className="d-flex flex-column mt-5">
      <Col className="mr-auto ml-auto" style={{ maxWidth: "500px" }}>
        <h1>Log in</h1>
      </Col>
      <Col className="mr-auto ml-auto" style={{ maxWidth: "500px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Your email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LogIn;
