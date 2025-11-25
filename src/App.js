import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectUpload from "./pages/ProjectUpload";
import Login from "./pages/Login";
import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
// import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project/add" element={<ProjectUpload />} />
        {/* <SpeedInsights /> */}
      </Routes>
    </Router>
  );
};

export default App;
