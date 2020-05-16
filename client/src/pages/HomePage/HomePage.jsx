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
    console.log("Logging out");
    removeToken(null);
    localStorage.clear();
  };
  return (
    <div className="homepage">
      <Sidebar />
      <Topbar onLogOut={handleLogOut} />
      <div className="homepage__content">
        <Dashboard></Dashboard>
      </div>

      <button>Log out</button>
    </div>
  );
};

export default HomePage;
