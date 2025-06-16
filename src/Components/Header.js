import { motion } from "framer-motion";
// import TypeWriter from "react-typewriter";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const techStack = [
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "React Native", icon: <FaReact />, color: "#61DAFB" },
  { name: "MERN", icon: <SiMongodb />, color: "#47A248" },
  { name: "GoLang", icon: <FaGolang />, color: "#61DAFB" },
];

const Header = ({ data }) => {
  const name = data?.name;
  const occupation = data?.occupation;
  const description = data?.description;
  const city = data?.address.city;
  const networks = data?.social.map((network, index) => (
    <motion.li
      key={network.name}
      initial={{ y: 50, opacity: 0 }} // start from bottom with 0opacity
      animate={{ y: 0, opacity: 1 }} // move up to its place
      transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }} // stagger the animation
    >
      <a href={network.url}>
        <i className={network.className}></i>
      </a>
    </motion.li>
  ));

  // Framer Motion variants for smooth entrance
  const variantContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const variantItem = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-top rounded-full bg-no-repeat shadow-custom-blueviolet order-1 justify-self-center bg-cover w-[160px] h-[150px] md:w-[260px] md:h-[250px] p-1 animate-profile-animate"
          style={{ backgroundImage: `url(/images/mwas.webp)` }}
        >
          {/* <img src="/images/mwas.jpg" alt="mwas pic" id="mwas" />*/}
        </motion.div>
        <div className="banner-text">
          {/* Technologies Display with Icon Logos and Colors */}
          {/* Banner text with smooth upward entrance */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
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

            {/* Animated badges with stagger effects */}
            <motion.div
              variants={variantContainer}
              initial="hidden"
              animate="visible"
              className="tech-container flex flex-wrap gap-4 mt-4 w-full items-center justify-center"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={variantItem}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 4px 20px rgb(0,0,0,0.5)",
                  }}
                  className="badge flex items-center font-[500] px-4 py-2 rounded-md text-base transition duration-300 ease-in-out uppercase bg-[blueviolet] text-white"
                >
                  <span
                    className="mr-2 text-3xl text-center shadow-xl shadow-black"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </span>
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      {/* <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p> */}
    </header>
  );
};

export default Header;
