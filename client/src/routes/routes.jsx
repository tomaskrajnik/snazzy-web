import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./../pages/Auth/Auth";
import HomePage from "./../pages/HomePage/HomePage";
import NotFound from "./../pages/NotFound/NotFound";

const Routes = ({ token }) => {
  return (
    <Switch>
      <Route path="/auth/log-in">
        <Auth />
      </Route>
      <Route path="/auth/register">
        <Auth />
      </Route>
      <Route path="/dashboard">
        <HomePage token={token} />
      </Route>
      <Route path="/not-found">
        <NotFound />
      </Route>
      <Redirect from="/auth" exact to="/auth/log-in" />
      <Redirect from="/log-in" exact to="/auth/log-in" />
      <Redirect from="/register" exact to="/auth/register" />
      <Redirect from="/" exact to="/dashboard" />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
