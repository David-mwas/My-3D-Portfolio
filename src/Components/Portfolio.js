import React from "react";

const Portfolio = ({ data, loading }) => {
  console.log(data);
  if (data) {
    var projects = data?.map(function (project) {
      var projectImage = project.imageUrls
        ? project.imageUrls[0]
        : "https://via.placeholder.com/400x300"; // Placeholder if image is missing

      return (
        <div key={project.title} className="w-full">
          <div className="shadow-xl rounded-lg overflow-hidden bg-white w-full h-[400px] group hover:scale-105   transition-all duration-300 ease-in-out">
            <img
              alt={project.title}
              src={projectImage}
              className="w-full h-56 object-cover group-hover:scale-95 transition-all duration-300 ease-in-out"
            />
            <div className="p-6">
              <h3 className="font-extrabold mb-2 text-3xl">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.category}</p>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="font-bold text-[20px] text-gray-600">
                  Tech Stack:
                </p>
                <p className="text-gray-600">{project?.tabs}</p>
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-500 hover:text-white"
                >
                  <i className="fa fa-github"></i> GitHub
                </a>
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 hover:text-white cursor-pointer"
                >
                  <i className="fa fa-link" aria-hidden="true"></i> View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section
      id="portfolio"
      className="w-full py-4 px-2 flex flex-col justify-center items-center"
    >
      <div className=" w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold">
            Check Out Some of My Works
          </h2>
        </div>
        {loading ? (
          <p>loading... </p>
        ) : (
          <div className="w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects ? (
              projects
            ) : (
              <h2 className="text-gray-500 text-center w-full">
                Coming soon...
              </h2>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
