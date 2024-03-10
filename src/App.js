import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import React, { useState } from "react";
import Modal from "./Modal/Modal";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        {" "}
        <Main />
      </div>
      <Modal />
    </div>
  );
}

export default App;
