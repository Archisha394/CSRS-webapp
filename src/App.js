import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import React from "react";

function App() {
  return (
    <div className="app-container">
      <Navbar /> 
      <div className="main-content">
        <Main />
      </div>
    </div>
  );
}

export default App;
