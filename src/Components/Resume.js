import React from "react";
import parse from "html-react-parser";
import { motion } from "framer-motion";

const Resume = ({ data }) => {
  if (data) {
    const education = data.education.map((edu) => (
      <motion.div
        key={edu.school}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h3>{edu.school}</h3>
        <p className="info">
          {edu.degree} <span>&bull;</span>
          <em className="date">{edu.graduated}</em>
        </p>
        <p>{edu.description}</p>
      </motion.div>
    ));

    const work = data.work.map((job, index) => (
      <motion.div
        key={job.company}
        className="work-item"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="circle">{index + 1}</div> {/* Numbering */}
        <h3>{job.company}</h3>
        <p className="info">
          {job.title}
          <span>&bull;</span> <em className="date">{job.years}</em>
        </p>
        <p>{parse(job.description)}</p> {/* Wrap with parse */}
      </motion.div>
    ));

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="vertical-timeline md:right-[40px]">{work}</div>
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col flex flex-col items-center">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-2/3 w-full">{education}</div>
              
              <motion.div 
                className="md:w-1/3 w-full flex justify-center mt-6 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                {/* Wrapper for circular crop and glow */}
                <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden shadow-[1px_2px_133px_blueviolet]">
                  {/* Image zoomed perfectly on face and hat */}
                  <img 
                    src="/images/grad.webp" 
                    alt="Graduation" 
                    className="w-full h-full object-cover scale-[2.5] origin-[50%_10%] object-[0%_40%]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null; // Return null if no data is provided
};

export default Resume;
