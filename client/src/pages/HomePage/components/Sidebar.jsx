import React, {useState, useEffect} from "react";
import "../sidebar.scss";
import {Button} from "react-bootstrap";
import * as eva from "eva-icons";
import logo from "../../../assets/images/snazzy-logo.svg"; // with import

const Sidebar = () => {
  useEffect(() => {
    eva.replace({
      fill: "#fff",
    });
  });
  const buttons = [
    {name: "Dashboard", icon: "home-outline", href: ""},
    {name: "Dashboard", icon: "home-outline", href: ""},
    {name: "Dashboard", icon: "home-outline", href: ""},
    {name: "Dashboard", icon: "home-outline", href: ""},
    {name: "Dashboard", icon: "home-outline", href: ""},
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper-logo">
        <img src={logo} alt="" className="sidebar__logo" />
      </div>
      <Button variant="primary">
        {" "}
        <i data-eva="home-outline"> </i>Dashboard
      </Button>
    </div>
  );
};

export default Sidebar;
