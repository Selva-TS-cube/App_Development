import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login_signup from "./components/login_signup";
import Home from "./components/home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login_signup" element={<Login_signup />} />

      </Routes>
    </Router>
  );
}

export default App;
