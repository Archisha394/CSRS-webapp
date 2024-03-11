import Navbar from "./Navbar/Navbar";
import React from "react";
import Main from "./Main/Main";
import Modal from "./Modal/Modal";
import Alert from "./Alert/Alert";
// import react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <div className="main-content">
      <section id="dashboard">
          <Main />
        </section>
        <section id="Alert">
          
            <Alert />
          
        </section>
        
      </div>
      <Modal />
    </div>
  );
}

export default App;
