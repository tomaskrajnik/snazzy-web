import React, {useState, useEffect} from "react";
import "../sidebar.scss";
import {Button} from "react-bootstrap";
import * as eva from "eva-icons";
import logoIcon from "../../../assets/images/snazzy-logo.svg";
import logoType from "../../../assets/images/snazzy-type.svg";

const Sidebar = () => {
  useEffect(() => {
    eva.replace({
      fill: "#fff",
      width: "20px",
      height: "20px",
    });
  });
  const buttons = [
    {name: "Dashboard", icon: "home-outline", href: ""},
    {name: "People", icon: "people-outline", href: ""},
    {name: "Pricing", icon: "layers-outline", href: ""},
    {name: "Settings", icon: "settings-outline", href: ""},
    {name: "Discover", icon: "bulb-outline", href: ""},
    {name: "FAQ", icon: "question-mark-circle-outline", href: ""},
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper-logo">
        <div className="sidebar__wrapper-logo-bg">
          <img src={logoIcon} alt="" className="sidebar__logo" />
        </div>
        <img src={logoType} alt="" className="sidebar__logo-type" />
      </div>
      <button className="sidebar__button sidebar__button__campaign">
        {" "}
        <i data-eva="plus-circle-outline"></i>Create new campaign
      </button>
      <div className="sidebar__buttons-wrapper">
        {buttons.map((b) => (
          <button className="sidebar__button">
            {" "}
            <i data-eva={b.icon}> </i>
            {b.name}
          </button>
        ))}

        <button className="sidebar__button sidebar__button__bottom">
          {" "}
          <i data-eva="star-outline"></i>Rate us
        </button>
      </div>
    </div>
  );
};

export default Sidebar;