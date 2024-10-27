import React from "react";
import TypeWriter from "react-typewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
  SiReact,
} from "react-icons/si";

const techStack = [
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
  { name: "MERN", icon: <SiMongodb />, color: "#47A248" },
];

const Header = ({ data }) => {
  const name = data?.name;
  const occupation = data?.occupation;
  const description = data?.description;
  const city = data?.address.city;
  const networks = data?.social.map((network) => (
    <li key={network.name}>
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </li>
  ));

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div
          className="bg-top rounded-full bg-no-repeat shadow-custom-blueviolet order-1 justify-self-center bg-cover  w-[150px] h-[150px] md:w-[250px] md:h-[250px] p-1 animate-profile-animate"
          style={{ backgroundImage: `url(/images/mwas.webp)` }}
        >
          {/* <img src="/images/mwas.jpg" alt="mwas pic" id="mwas" /> */}
        </div>
        <div className="banner-text">
          <h1 className="responsive-headline w-full">I'm {name}.</h1>
          <h3>
            Based in {city}, Kenya <br />
            <a
              rel="noreferrer"
              href="https://ihub.mmust.ac.ke/about"
              id="occupation"
              target="_blank"
            >
              {occupation}
            </a>
            . {description}
          </h3>

          {/* Technologies Display with Icon Logos and Colors */}
          <div className="tech-container flex flex-wrap gap-4 mt-4 w-full items-center justify-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="badge flex items-center font-[500] px-4 py-2 rounded-md text-base transition duration-300 ease-in-out uppercase bg-[blueviolet] text-white"
              >
                <span
                  className="mr-2 text-xl"
                  style={{ color: tech.color }} // Apply color only to the icon
                >
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
