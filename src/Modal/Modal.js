import React, { useState } from "react";
import "./Modal.css"; // Import CSS for modal styles

const GoogleMapLocation = () => {
  // Function to handle map initialization or any other map-related logic
  // This is just a placeholder
  return (
    <div className="google-map-location" style={{ backgroundColor: "#f0f0f0" }}>
      Google Map Location
    </div>
  );
};

const Modal = () => {

  return (
    <div>
      {/* Button to open the modal */}

      {/* Modal */}
      {/* {isOpen && ( */}
        <div className="modal">
          <div className="modal-content">
            {/* Close button */}
            <span className="close">
              &times;
            </span>

            {/* Modal content */}
            <h2>EMERGENCY!</h2>
            <p>@name needs help</p>
            <GoogleMapLocation />

            {/* Close button */}
            <button className="close-button" >
              Close
            </button>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
