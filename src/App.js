import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectUpload from "./pages/ProjectUpload";
import Login from "./pages/Login";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const App = () => {
  gsap.registerPlugin(SplitText);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project/add" element={<ProjectUpload />} />
      </Routes>
    </Router>
  );
};

export default App;
