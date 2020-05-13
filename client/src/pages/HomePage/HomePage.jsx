import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";

const HomePage = ({token}) => {
  if (!token) {
    return <Redirect to="/auth" />;
  }
  return (
    <div className="homepage">
      <Sidebar />
      <Topbar />
      <Dashboard></Dashboard>
    </div>
  );
};

export default HomePage;
