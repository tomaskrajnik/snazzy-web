import React, {useEffect} from "react";
import * as eva from "eva-icons";
import "../topbar.scss";
import notificationSVG from "../../../assets/images/notification.svg";
import profilePicture from "../../../assets/images/profile-picture.svg";
import {Dropdown} from "react-bootstrap";

const Topbar = () => {
  useEffect(() => {
    eva.replace({
      width: "10px",
    });
  });

  return (
    <div className="topbar">
      <div className="topbar__workspaces">
        <div className="topbar__workspaces-main">
          MyMonii website campaigns{" "}
          <i data-eva="chevron-right-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <div className="topbar__workspaces-secondary">
          Premium Advertisement{" "}
          <i data-eva="chevron-down-outline" data-eva-fill="#A7B4CC"></i>
        </div>
      </div>
      <input
        type="text"
        className="topbar__search"
        placeholder="Search.."
      ></input>
      <div className="topbar__notification">
        <img src={notificationSVG} alt="" />
      </div>

      <Dropdown className="topbar__profile-btn">
        <Dropdown.Toggle id="dropdown-basic">
          <img src={profilePicture} alt="" />
          John Doe
          <i data-eva="chevron-down-outline" data-eva-fill="#A7B4CC"></i>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Topbar;
