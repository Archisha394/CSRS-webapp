import Navbar from "./Navbar/Navbar";
import React from "react";
// import react router 
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Login from "./login/login";
function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <Navbar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
      <div className="main-content">
        {" "}
        <Main />
      </div>
      <Modal />
    </div>
  );
}

export default App;
