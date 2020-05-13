import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

const Auth = ({ token, saveToken }) => {
  return (
    <React.Fragment>
      <h1>Snazzy</h1>
      <Switch>
        <Route path="/auth/register">
          <Register token={token} saveToken={saveToken} />
        </Route>
        <Route path="/auth/log-in">
          <LogIn token={token} saveToken={saveToken} />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Auth;
