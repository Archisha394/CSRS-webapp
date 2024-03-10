import React from "react";
import aboutIcon from "../images/profile.png";
import servicesIcon from "../images/notif.png";
import "./Main.css";
import BasicTable from "../List/List";

function Main() {
  return (
    <div className="main-container">
      <div className="topbar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a href="#">
              <img src={servicesIcon} alt="Notifications" className="icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={aboutIcon} alt="Profile" className="icon" />
            </a>
          </li>
        </ul>
      </div>
      <hr className="line" />
      <div className="boxes-container">
        <div className="box">
          <div
            className="number"
            style={{
              color: "red",
              fontSize: "110px",
              fontWeight: "bold",
              paddingTop: "0px",
            }}
          >
            27
          </div>
          <p className="box-text">Total Cases </p>
          <p className="box-text">(in last 30 days)</p>
        </div>

        <div className="box">
          <div></div>
          <p className="box-text">High Cases Zone</p>
        </div>
        <div className="box">
          <div className="number">
            <span
              style={{ color: "red", fontSize: "90px", fontWeight: "bold" }}
            >
              09:37
            </span>
            <span style={{ color: "red", fontSize: "20px" }}>mins</span>
          </div>
          <p className="box-text">Avg. Time to solve</p>
        </div>
      </div>
      <div className="list-container">
        <h2 style={{ margin: "0" }}>Previous Cases</h2>
        <hr className="line" style={{ width: "100%" }} />
        <BasicTable />
      </div>
    </div>
  );
}

export default Main;
