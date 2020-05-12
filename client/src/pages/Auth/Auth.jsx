import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

class Auth extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Snazzy</h1>
        <Switch>
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/log-in" component={LogIn} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Auth;
