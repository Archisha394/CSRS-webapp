import React, { useState, useEffect } from "react";
import "./Alert.css";
import photo from "../images/photo.png";
import map from "../images/map.png"

function Alert() {
  
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alert">
      <div className="upper-section">
        <div className="profile">
          <h2>Profile of the student</h2>
          <div className="profile-content">
            <img src={photo} alt="Photo" />
            <div>
              <p>Full-Name</p>
              <p>Roll number: 22XX100XX</p>
              <p>Hall: SNVH </p>
              <p>Contact number: 9281640192</p>
            </div>
          </div>
        </div>
        <div className="timer">
          <h2 style={{ color: "#FD0606", fontWeight: "bold" }}>
            <span style={{ fontSize: "100px" }}>{time}</span> seconds
          </h2>
          <p>Time since alert taken</p>
        </div>
      </div>
      
      <div className="map">
        <h2> Check their location:</h2>
        <div className="location"><img src={map} alt="" /></div>
      </div>
      <div className="Resolved-button">
        <button><a href="#dashboard">Matter Resolved</a></button>
      </div>
      
    </div>
  );
}

export default Alert;
