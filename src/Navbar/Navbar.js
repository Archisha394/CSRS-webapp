import React from "react";
import logo from "../images/logo.png";
import homeIcon from "../images/dashborad.png";
import aboutIcon from "../images/profile.png";
import servicesIcon from "../images/notif.png";
import contactIcon from "../images/search.png";
import settingsIcon from "../images/settings.png";
import logoutIcon from "../images/LOGOUT.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="upper-bar">
        <li className="sidebar-items">
          <img src={homeIcon} alt="Dashboard" className="icon" />
          <a href="#">Dashboard</a>
        </li>
        <li>
          <img src={aboutIcon} alt="Profile" className="icon" />
          <a href="#">Profile</a>
        </li>
        <li>
          <img src={servicesIcon} alt="Notifications" className="icon" />
          <a href="#">Notifications</a>
        </li>
        <li>
          <img src={contactIcon} alt="Search" className="icon" />
          <a href="#">Search</a>
        </li>
      </ul>
      <div className="lower-bar">
        <ul>
          <li>
            <img src={settingsIcon} alt="Settings" className="icon" />
            <a href="#">Settings</a>
          </li>
          <li>
            <img src={logoutIcon} alt="Logout" className="icon" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
