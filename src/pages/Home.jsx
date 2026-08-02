import React, { useEffect, useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";
import "../App.css";

import { resumeData } from "../contantData/resumeData"; // Assuming you have a local JSON file for resume data
import { SpeedInsights } from "@vercel/speed-insights/react";
function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch pinned GitHub projects on component mount
  useEffect(() => {
    setLoading(true);
    const fetchProjects = async () => {
      try {
        const pinnedNames = [
          "WindowsTempCleanify",
          "statementchecker",
          "CodingArena",
          "sellify",
          "create-node-backend",
          "SafeEnv",
        ];

        // Local curated cover images per project (fallback if README has no image)
        const localImageMap = {
          "WindowsTempCleanify": "/images/windows_temp_cleanify.png",
          "statementchecker": "/images/statement_checker.png",
          "CodingArena": "/images/coding_arena.png",
          "sellify": "/images/sellify.png",
          "create-node-backend": "/images/create_node_backend.png",
          "SafeEnv": "/images/safe_env.png",
        };

        // Fetch all repos for the user
        const response = await fetch(
          "https://api.github.com/users/David-mwas/repos?per_page=100&sort=updated"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub projects (Possible Rate Limit)");
        }

        const data = await response.json();

        // Filter the pinned repos
        const filteredRepos = data.filter((repo) =>
          pinnedNames.includes(repo.name)
        );

        // Map repos to project format using local curated images
        const projectsWithScreenshots = filteredRepos.map((repo) => {
          const screenshot = localImageMap[repo.name] || "";
          return {
            _id: repo.id,
            title: repo.name,
            description: repo.description,
            category: repo.language || "Project",
            tabs: repo.topics && repo.topics.length > 0 ? repo.topics.join(", ") : repo.language,
            githublink: repo.html_url,
            livelink: repo.homepage || repo.html_url,
            imageUrls: screenshot ? [screenshot] : [],
            time: repo.updated_at,
          };
        });

        // Re-order according to the pinned order (preserving your GitHub pinned order)
        const sortedData = pinnedNames
          .map((name) => projectsWithScreenshots.find((p) => p.title === name))
          .filter(Boolean);

        setProjects(sortedData);
      } catch (err) {
        console.error("GitHub Fetch Error:", err.message, "- Falling back to CMS data.");
        // Fallback to CMS data if GitHub rate limits us
        try {
          const cmsRes = await fetch("https://portfolio-cms-nine.vercel.app/api/v1/project/getall");
          if (cmsRes.ok) {
            const cmsData = await cmsRes.json();
            
            // Map the custom images onto the CMS data
            const localImageMap = {
              "WindowsTempCleanify": "/images/windows_temp_cleanify.png",
              "statementchecker": "/images/statement_checker.png",
              "CodingArena": "/images/coding_arena.png",
              "sellify": "/images/sellify.png",
              "create-node-backend": "/images/create_node_backend.png",
              "SafeEnv": "/images/safe_env.png",
            };
            
            const mappedCmsData = cmsData.map(p => {
               if (localImageMap[p.title]) {
                  return { ...p, imageUrls: [localImageMap[p.title]] };
               }
               return p;
            });
            
            // Sort by time
            mappedCmsData.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
            setProjects(mappedCmsData);
          }
        } catch (cmsErr) {
           console.error("CMS fallback also failed:", cmsErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="App overflow-x-hidden">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={projects} loading={loading} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
       <SpeedInsights />
    </div>
  );
}

export default Home;
