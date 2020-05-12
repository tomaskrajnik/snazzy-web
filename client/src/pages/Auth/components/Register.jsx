import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import AuthService from "./../../../services/authService";
import Plans from "./../../../services/plansService";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    selectedPlan: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [plans, setPlans] = useState(() => {
    async function getPlans() {
      const plans = (await Plans()).data;
      setPlans(plans);
      setIsLoading(false);
    }
    getPlans();
  });

  const handleChange = ({ currentTarget: input }) => {
    const credentials = { ...user };
    const { name, value } = input;
    console.log(value);
    name === "selectedPlan"
      ? (credentials[name] = value.id)
      : (credentials[name] = value);
    setUser(credentials);
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(user);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Row className="d-flex flex-column mt-5">
      <Col className="mr-auto ml-auto" style={{ maxWidth: "500px" }}>
        <h1>Register</h1>
      </Col>
      <Col className="mr-auto ml-auto" style={{ maxWidth: "500px" }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          {!isLoading && (
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select plan</Form.Label>
              <Form.Control
                as="select"
                name="selectedPlan"
                onChange={handleChange}
              >
                {plans.map((plan) => (
                  <option key={plan._id} id={plan._id}>
                    {plan.title}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
