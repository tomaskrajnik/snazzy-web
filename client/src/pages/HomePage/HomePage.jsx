import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const HomePage = ({ token }) => {
  if (!token) {
    return <Redirect to="/auth" />;
  }
  return <h1>Dashboard {token}</h1>;
};

export default HomePage;
