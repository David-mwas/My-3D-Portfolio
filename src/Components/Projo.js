import React, { useState, useEffect } from "react";

const ProjectManagement = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [githublink, setGithubLink] = useState("");
  const [livelink, setLiveLink] = useState("");
  const [time, setTime] = useState("");
  const [tabs, setTabs] = useState([]);
  const [imageFiles, setImageFiles] = useState([]); // To handle file uploads
  // const [token, setToken] = useState(localStorage.getItem("token"));

  // Fetch all projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://portfolio-cms-nine.vercel.app/api/v1/project/getall",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRtd2FzNzA0QGdtYWlsLmNvbSIsImlhdCI6MTczMDAzMjAwNSwiZXhwIjoxNzYxNTg5NjA1LCJhdWQiOiI2NjIzOTM1Y2ZlMGI4ZDJiOTgyMjQ3Y2IiLCJpc3MiOiJhcHBsaWNhdGlvbiJ9.tg3k_cfvrYWi3FO8-6F1ethCuBXuWoJN8bx-HADoPXw`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchProjects();
  }, []);

  // Handle file input changes
  const handleFileChange = (e) => {
    setImageFiles(e.target.files);
  };

  // Create a new project
  const handleCreate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("duration", duration);
    formData.append("githublink", githublink);
    formData.append("livelink", livelink);
    formData.append("time", time);
    formData.append("tabs", tabs);

    // Add image files to formData
    Array.from(imageFiles).forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(
        "https://portfolio-cms-nine.vercel.app/api/v1/project",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRtd2FzNzA0QGdtYWlsLmNvbSIsImlhdCI6MTczMDAzMjAwNSwiZXhwIjoxNzYxNTg5NjA1LCJhdWQiOiI2NjIzOTM1Y2ZlMGI4ZDJiOTgyMjQ3Y2IiLCJpc3MiOiJhcHBsaWNhdGlvbiJ9.tg3k_cfvrYWi3FO8-6F1ethCuBXuWoJN8bx-HADoPXw`,
          },
          body: formData, // send formData
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create project");
      }

      const newProject = await response.json();
      setProjects([...projects, newProject]);

      // Clear form fields after submission
      setTitle("");
      setDescription("");
      setDuration("");
      setGithubLink("");
      setLiveLink("");
      setTime("");
      setTabs([]);
      setImageFiles([]);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete a project
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://portfolio-cms-nine.vercel.app/api/v1/project/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRtd2FzNzA0QGdtYWlsLmNvbSIsImlhdCI6MTczMDAzMjAwNSwiZXhwIjoxNzYxNTg5NjA1LCJhdWQiOiI2NjIzOTM1Y2ZlMGI4ZDJiOTgyMjQ3Y2IiLCJpc3MiOiJhcHBsaWNhdGlvbiJ9.tg3k_cfvrYWi3FO8-6F1ethCuBXuWoJN8bx-HADoPXw`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete project");
      }

      setProjects(projects.filter((project) => project._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-[80%] md:w-[40%] mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Manage Projects</h2>

      {/* Project Form */}
      <form onSubmit={handleCreate} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">GitHub Link</label>
          <input
            type="text"
            value={githublink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Live Link</label>
          <input
            type="text"
            value={livelink}
            onChange={(e) => setLiveLink(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Time</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Tabs</label>
          <input
            type="text"
            value={tabs}
            onChange={(e) => setTabs(e.target.value.split(","))}
            className="w-full px-3 py-2 border rounded"
          />
          <small>Comma-separated values</small>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Images</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-400"
        >
          Create Project
        </button>
      </form>

      {/* Project List */}
      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold">{project?.title}</h3>
              {/* <p>{project.description}</p>
              <p>
                <strong>Duration:</strong> {project?.duration}
              </p>
              <p>
                <strong>Time:</strong> {project?.time}
              </p>
              <p>
                <strong>Tabs:</strong> {project?.tabs?.join(", ")}
              </p>
              <p>
                <strong>Images:</strong> {project?.imageUrls?.join(", ")}
              </p> */}
              <div className="flex justify-end">
                <button
                  onClick={() => handleDelete(project?._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectManagement;
