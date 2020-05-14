import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Input from "./../../../components/common/Input";
import SubmitButton from "../../../components/common/SubmitButton";

import AuthService from "./../../../services/authService";
import Plans from "./../../../services/plansService";

import backgroundUpperAsset from "./../../../assets/images/auth-background-asset1.svg";
import backgroundLowerAsset from "./../../../assets/images/auth-background-asset2.svg";

import mailchimpLogo from "./../../../assets/images/integrations/mailchimp.svg";
import wordpressLogo from "./../../../assets/images/integrations/wordpress.svg";
import shopifyLogo from "./../../../assets/images/integrations/shopify.svg";
import googleLogo from "./../../../assets/images/integrations/google.svg";

const integrationLogos = [
  { id: 1, src: mailchimpLogo },
  { id: 2, src: wordpressLogo },
  { id: 3, src: shopifyLogo },
  { id: 4, src: googleLogo },
];

const whatWeOfferArray = [
  "Campaign builder",
  "Design your own pop ups",
  "Watch the behaviour",
];

const Register = ({ token, saveToken }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    selectedPlan: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    const credentials = { ...user };
    const { name, value } = input;
    credentials[name] = value;
    setUser(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { ...user, selectedPlan: "Trial" };
    try {
      const response = await AuthService.register(credentials);
      const token = response.headers["x-auth-token"];
      localStorage.setItem("snazzyAuthToken", token);
      saveToken(token);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (token) return <Redirect to="/" />;

  return (
    <div className="d-flex flex-column text-center ">
      <Row className="ml-auto mr-auto mt-5">
        <Col>
          <div className=" mr-0 text-left position-relative form-wrapper">
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
            <h2 className="mb-5">Create an account</h2>
            <Form className="mt-5" onSubmit={handleSubmit}>
              <Input
                name="name"
                type="text"
                onChange={handleChange}
                label="Name"
              />
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
              />

              <SubmitButton title="Sign in" />
            </Form>
          </div>
          <div className=" mt-4 mb-5">
            <p>
              Already have an account?
              <span>
                {" "}
                <Link to="/log-in" className="linkToOtherAuth">
                  Sign in
                </Link>
              </span>
            </p>
          </div>
        </Col>

        <Col className="text-wrapper text-left">
          <h1 className="mb-5">7 day trial for free!</h1>
          {whatWeOfferArray.map((item) => (
            <li className="whatWeOffer" key={item}>
              {item}
            </li>
          ))}
          <h3 className="mt-5">25+ Integrations</h3>
          <p className="mt-2">
            Integrating with your email service provider is easy with our native
            integrations, Zapier or through our API.
          </p>
          {integrationLogos.map(({ id, src }) => (
            <img className="mr-4 mt-4" key={id} src={src}></img>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Register;
