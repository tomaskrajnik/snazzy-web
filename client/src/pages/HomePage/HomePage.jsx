import React from "react";
import { Redirect } from "react-router-dom";

const HomePage = ({ token, removeToken }) => {
  if (!token) {
    return <Redirect to="/auth" />;
  }
  const handleLogOut = () => {
    removeToken(null);
    localStorage.clear();
  };
  return (
    <div>
      <h1>Dashboard {token}</h1>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default HomePage;
