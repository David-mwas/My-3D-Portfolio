import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";
import "../App.css";

function Home() {
  const [resumeData, setResumeData] = useState({});
  const [projects, setProjects] = useState([]);
  // const token = process.env.REACT_APP_TOKEN;

  const [token, setToken] = useState(
    localStorage.getItem("token") || process.env.REACT_APP_TOKEN
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  // Fetch all projects on component mount
  useEffect(() => {
    setLoading(true);
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-cms-nine.vercel.app/api/v1/project/getall",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [token]);
  return (
    <div className="App overflow-x-hidden">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={projects} loading={loading} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}

export default Home;
