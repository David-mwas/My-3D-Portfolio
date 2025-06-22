import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
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
  // const name = data?.name;
  const occupation = data?.occupation;
  const description = data?.description;
  const city = data?.address?.city;
  const social = [
    {
      name: "github",
      url: "https://github.com/David-mwas",
      className: "fa fa-github",
    },
    {
      name: "gtwitter",
      url: "https://x.com/DavidMwas2_0",
      className: "fa fa-twitter",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/david-mwangi-a57186235/",
      className: "fa fa-linkedin",
    },
  ];

  const containerRef = useRef();
  const nameRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
  const badgeRefs = useRef([]);
  const socialRefs = useRef([]);

  useGSAP(
    () => {
      // Animate image
      gsap.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
      );

      // SplitText animation
      const splitText = new SplitText(nameRef.current, {
        type: "chars, words",
      });

      console.log(splitText);

      gsap.from(splitText.chars, {
        y: 100,
        autoAlpha: 0,
        rotate: gsap.utils.wrap([-90, 90]),
        duration: 1,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });

      // Description animation
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      // Tech badges
      badgeRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            scale: 0,
            rotation: gsap.utils.random(-360, 360),
            x: gsap.utils.random(-300, 300),
            y: gsap.utils.random(-200, 200),
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            x: 0,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)",
            delay: i * 0.06,
          }
        );

        // Add hover effect
        el.addEventListener("mouseenter", () => {
          gsap.to(el, {
            scale: 0.8,
            rotate: gsap.utils.random(-10, 10),
            duration: 0.01,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(el, {
            scale: 1,
            rotate: 0,
            duration: 0.01,
            ease: "power2.inOut",
          });
        });
      });

      // Socials
      socialRefs.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.2 + 1,
            ease: "back.out(1.7)",
          }
        );
      });
    },
    { scpe: containerRef }
  );

  return (
    <header id="home" ref={containerRef}>
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
      <div className="row banner flex flex-col items-center justify-center text-center">
        <div
          ref={imageRef}
          className="bg-top rounded-full bg-no-repeat shadow-custom-blueviolet order-1 justify-self-center bg-cover w-[160px] h-[150px] md:w-[260px] md:h-[250px] p-1 animate-profile-animate"
          style={{ backgroundImage: `url(/images/mwas.webp)` }}
        />

        <div className="banner-text mt-6">
          <h1 ref={nameRef} className="responsive-headline w-full">
            I'm David Mwangi Wanjiru
          </h1>

          <h3 ref={textRef}>
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
          <div className="tech-container flex flex-wrap gap-4 mt-6 w-full items-center justify-center">
            {techStack?.map((tech, index) => (
              <div
                key={index}
                ref={(el) => (badgeRefs.current[index] = el)}
                className="badge flex items-center font-[500] px-4 py-2 rounded-md text-base transition duration-300 ease-in-out uppercase bg-[blueviolet] text-white"
              >
                <span
                  className="mr-2 text-3xl text-center shadow-xl shadow-black"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <hr className="my-6" />
          <ul className="social flex gap-4 justify-center mt-2">
            {social?.map((network, index) => (
              <li
                key={network.name}
                ref={(el) => (socialRefs.current[index] = el)}
              >
                <a href={network.url} target="_blank" rel="noreferrer">
                  <i className={`${network.className} text-5xl`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
