import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Portfolio = ({ data, loading }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2, // slower duration
          ease: "power2.inOut", // smooth easing
          delay: i * 0.06, // slight stagger
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.02,
      });
    });
  }, [data]);
  
  

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const projects = data?.map((project, index) => {
    const projectImage =
      project.imageUrls?.[0] || "https://via.placeholder.com/400x300";

    return (
      <div
        key={project.title}
        ref={addToRefs}
        className="w-full transform transition-transform duration-300 hover:scale-[1.01]"
      >
        <div className="relative shadow-xl rounded-lg overflow-hidden bg-white w-full h-[400px] group">
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300 z-10" />
          <img
            alt={project.title}
            src={projectImage}
            className="w-full h-56 object-cover transform group-hover:scale-105 transition-all duration-500 ease-out"
          />
          <div className="p-6 relative z-20">
            <h3 className="font-extrabold mb-2 text-3xl">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.category}</p>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {project.description}
            </p>
            <div className="mb-4">
              <p className="font-bold text-[20px] text-gray-600">Tech Stack:</p>
              <p className="text-gray-600">{project?.tabs}</p>
            </div>
            <div id="livelinks" className="flex space-x-4">
              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                <i className="fa fa-github mr-1" aria-hidden="true"></i> GitHub
              </a>
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[blueviolet] text-white px-4 py-2 rounded hover:bg-[blueviolet]/75"
              >
                <i className="fa fa-link mr-1" aria-hidden="true"></i> View Live
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section
      id="portfolio"
      className="w-full py-4 px-2 flex flex-col justify-center items-center"
    >
      <div
        className="w-full flex flex-col justify-center items-center relative"
        ref={containerRef}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold">
            Check Out Some of My Works
          </h2>
        </div>

        {loading ? (
          <p>loading... </p>
        ) : (
          <div className="w-full lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects?.length > 0 ? (
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
