import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start 
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  const handleViewCV = () => {
    // Replace 'CV_URL' with the direct URL to your CV file
    const cvUrl = "/DAVIDMWANGIWANJIRU CVLTS.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <Section mobileTop>
      <h4 className="flex flex-col text-xl md:text-2xl  text-gray-500 font-bold leading-snug">
        Hello world 👋,
        <p className="flex flex-row py-2">
          <span className="text-2xl md:text-3xl bg-purple-500 rounded-lg rounded-tr-none rounded-br-none text-white  px-2">
            I'm
          </span>

          <span className="bg-white text-purple-500 px-2 text-3xl md:text-4xl  rounded-lg rounded-tl-none rounded-bl-none font-[700]  uppercase">
            David Mwangi
          </span>
        </p>
      </h4>
      <motion.p
        className="text-lg text-gray-100 mt-4 md:w-[44%] bg-[rgba(0,28,48,.4)] rounded-lg py-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a Frontend Software Developer proficient in ReactJS, Next.js, and
        Tailwind CSS. With expertise in JavaScript and Node.js, I craft seamless
        web experiences and responsive designs. Skilled in Git and Python, I
        prioritize software quality and efficient workflows. Passionate about
        bug tracking and resolution, I'm committed to excellence in software
        development. Currently affiliated with ALX Africa, I'm dedicated to
        continuous learning and innovation.
      </motion.p>
      <section className="flex gap-8">
        <motion.button
          onClick={() => setSection(3)}
          className={`bg-purple-500 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-8 hover:bg-purple-400  transition-all duration-300 ease-in-out`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
        <motion.button
          onClick={handleViewCV}
          className={`bg-purple-500 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-8 flex space-x-2 justify-center items-center text-center hover:bg-purple-400  transition-all duration-300 ease-in-out`}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          <FaEye />
          <span> View CV</span>
        </motion.button>
      </section>
    </Section>
  );
};

const skills = [
  {
    title: "React && React Native",
    level: 70,
  },
  {
    title: "Threejs && React Three Fiber",
    level: 30,
  },
  {
    title: "NodeJS",
    level: 70,
  },
  {
    title: "Typescript",
    level: 40,
  },
  {
    title: "Git && Github",
    level: 70,
  },
  {
    title: "Tailwind CSS",
    level: 80,
  },
];
// const languages = [

//   {
//     title: "🇺🇸 English",
//     level: 80,
//   },

// ];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-[40px] font-bold uppercase">Skills</h2>
        <div className=" mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                <h4 className="uppercase">{skill.title}</h4>
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-purple-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl font-bold uppercase">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message || !name || !email) {
      toast.error("Please fill all fields");
      return;
    }
    const notify = () => toast.loading("sending email...");
    emailjs
      .send(
        "service_vh3m71d",
        "template_5ru33h9",
        {
          from_name: name,
          from_email: email,
          to_name: "David",
          message: message,
        },
        "8MXSeZescYFJ-Xz41"
      )
      .then((response) => {
        toast.success("Email sent successfully:", { id: notify() });
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        toast.error(`Error sending email: ${error}`, { id: notify() });
        console.error("Error sending email:", error);
      })
      .finally(() => {
        setName("");
        setMessage("");
        // window.location.href = "/#";
      });

    // window
    //   .open(
    //     `mailto:dmwas704@gmail.com?subject=Message from ${name}&body=${message}`
    //   )
  };
  return (
    <Section>
      <Toaster />
      <h2 className="text-3xl font-bold uppercase">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-40 w-96 max-w-full">
        <form
        // onSubmit={handleSubmit}
        // method="post"
        // action={`mailto:https://dmwas704@gmail.com?subject=Message from ${name}&body=${message}`}
        // encType="multipart/form-data"
        >
          <label
            htmlFor="name"
            className="font-medium text-gray-900 block mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3 bg-white outline-none"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:indigo-600 p-3 bg-white outline-none"
          />
          <label
            htmlFor="email"
            className="font-medium text-gray-900 block mb-1 mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Enter your message here"
            className="resize-none h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3 bg-white outline-none"
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="bg-purple-500 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
          >
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
