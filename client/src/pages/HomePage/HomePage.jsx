import React from "react";
import {Redirect} from "react-router-dom";
import "./homepage.scss";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";

const HomePage = ({token, removeToken}) => {
  if (!token) {
    return <Redirect to="/auth" />;
  }
  const handleLogOut = () => {
    removeToken(null);
    localStorage.clear();
  };
  return (
    <div className="homepage">
      <Sidebar />
      <Topbar />
      <div className="homepage__content">
        <Dashboard></Dashboard>
      </div>

      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default HomePage;
