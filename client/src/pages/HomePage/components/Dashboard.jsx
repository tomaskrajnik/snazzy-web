import React, {useState, useEffect} from "react";
import * as eva from "eva-icons";
import "../dashboard.scss";

const Dashboard = () => {
  useEffect(() => {
    eva.replace({
      width: "20px",
      height: "20px",
    });
  });

  return (
    <div class="dashboard">
      <div className="dashboard__header">
        <h1>My campaigns</h1>
        <div className="dashboard__icon__list">
          <i data-eva="list-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <div className="dashboard__icon__grid">
          <i data-eva="grid-outline" data-eva-fill="#A7B4CC"></i>
        </div>
        <button className="dashboard__btn__create">
          {" "}
          <i data-eva="plus-circle-outline" data-eva-fill="#fff"></i>Create new
          campaign
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
