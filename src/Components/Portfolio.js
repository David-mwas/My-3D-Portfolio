import React from "react";

const Portfolio = ({ data, loading }) => {
  console.log(data);
  if (data) {
    var projects = data?.map(function (project) {
      var projectImage = project.imageUrls
        ? project.imageUrls[0]
        : "https://via.placeholder.com/400x300"; // Placeholder if image is missing

      return (
        <div key={project.title} className="w-full sm:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              alt={project.title}
              src={projectImage}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="font-extrabold mb-2 text-3xl">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.category}</p>
              <p className="text-gray-600 mb-4">{project.description}</p>

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
                  <i class="fa fa-link" aria-hidden="true"></i> View Live
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio" className="py-4 px-2">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold">
            Check Out Some of My Works
          </h1>
        </div>
        {loading ? (
          <p>loading... </p>
        ) : (
          <div className="flex flex-wrap -m-4">
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
