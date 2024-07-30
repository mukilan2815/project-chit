import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import User from "./Pages/Userprofile";
import TermsAndConditions from "./Pages/TermsandConditions";
import Ownerdashboard from "./Pages/Ownerdashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<User />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/ownerdashboard" element={<Ownerdashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
