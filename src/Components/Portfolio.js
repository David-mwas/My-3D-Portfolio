import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Language color map matching the site's palette
const langColors = {
  Go: { bg: "#00ACD7", text: "#fff" },
  Kotlin: { bg: "blueviolet", text: "#fff" },
  JavaScript: { bg: "#F7DF1E", text: "#313131" },
  TypeScript: { bg: "#3178C6", text: "#fff" },
  default: { bg: "blueviolet", text: "#fff" },
};

// Language gradient for placeholder card headers
const langGradients = {
  Go: "linear-gradient(135deg, #00ACD7 0%, #00758f 100%)",
  Kotlin: "linear-gradient(135deg, blueviolet 0%, #C811E1 100%)",
  JavaScript: "linear-gradient(135deg, #F7DF1E 0%, #e6a817 100%)",
  TypeScript: "linear-gradient(135deg, #3178C6 0%, #1a4f8a 100%)",
  default: "linear-gradient(135deg, blueviolet 0%, #9b30e0 100%)",
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const hasImage = !!(project.imageUrls?.[0]);

  useEffect(() => {
    const node = cardRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 6,
        speed: 600,
        glare: true,
        "max-glare": 0.08,
        scale: 1.015,
        easing: "cubic-bezier(.03,.98,.52,.99)",
      });
    }
    return () => node?.vanillaTilt?.destroy();
  }, []);

  const techStack = project.tabs
    ? project.tabs.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const langColor = langColors[project.category] || langColors.default;
  const gradient = langGradients[project.category] || langGradients.default;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, rotateX: 8 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: index * 0.12,
          },
        },
      }}
      className="w-full h-full flex"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        className="group relative flex flex-col w-full h-full rounded-2xl overflow-hidden"
        style={{
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
          border: "1px solid rgba(138,43,226,0.08)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Card image / placeholder */}
        <div className="relative overflow-hidden" style={{ height: "220px" }}>
          {/* Hover overlay */}
          <div
            className="absolute inset-0 z-10 transition-opacity duration-400"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)",
              opacity: 0,
            }}
            ref={(el) => {
              if (el) {
                const card = el.closest(".group");
                if (card) {
                  card.addEventListener("mouseenter", () => { el.style.opacity = "1"; });
                  card.addEventListener("mouseleave", () => { el.style.opacity = "0"; });
                }
              }
            }}
          />

          {hasImage ? (
            <motion.img
              ref={imageRef}
              src={project.imageUrls[0]}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{ background: gradient }}
            >
              {/* Animated code symbol */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="select-none"
                style={{
                  fontFamily: "'opensans-bold', monospace",
                  fontSize: "72px",
                  color: "rgba(255,255,255,0.25)",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                {"</>"}
              </motion.div>
              <span
                style={{
                  fontFamily: "'opensans-bold', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  marginTop: "10px",
                }}
              >
                {project.category}
              </span>
            </div>
          )}

          {/* Bottom animated accent bar */}
          <div
            className="absolute bottom-0 inset-x-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 z-20"
            style={{
              background: "linear-gradient(to right, blueviolet, #c084fc)",
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />

          {/* Language badge */}
          <div
            className="absolute top-3 right-3 z-20 px-2 py-1 rounded-md"
            style={{
              background: langColor.bg,
              color: langColor.text,
              fontFamily: "'opensans-bold', sans-serif",
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            {project.category}
          </div>
        </div>

        {/* Card Content */}
        <div className="flex flex-col flex-grow p-6">
          {/* Title */}
          <h3
            className="mb-2 group-hover:text-[blueviolet] transition-colors duration-300 line-clamp-1"
            style={{
              margin: "0 0 8px 0",
              lineHeight: "28px",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="mb-4 line-clamp-3"
            style={{
              margin: "0 0 16px 0",
              flexGrow: 1,
            }}
          >
            {project.description || "A project built with modern technologies and clean code."}
          </p>

          {/* Tech pills */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {techStack.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'opensans-regular', sans-serif",
                    fontSize: "11px",
                    color: "blueviolet",
                    background: "rgba(138,43,226,0.08)",
                    border: "1px solid rgba(138,43,226,0.15)",
                    borderRadius: "4px",
                    padding: "3px 9px",
                    letterSpacing: "0.3px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-auto">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={project.githublink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg transition-colors duration-200"
              style={{
                fontFamily: "'opensans-bold', sans-serif",
                fontSize: "13px",
                color: "#fff",
                background: "#313131",
                padding: "10px 16px",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#555"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#313131"; }}
            >
              <i className="fa fa-github" style={{ fontSize: "15px" }} />
              Code
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={project.livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg transition-colors duration-200"
              style={{
                fontFamily: "'opensans-bold', sans-serif",
                fontSize: "13px",
                color: "#fff",
                background: "blueviolet",
                padding: "10px 16px",
                textDecoration: "none",
                letterSpacing: "0.3px",
                boxShadow: "0 4px 14px rgba(138,43,226,0.3)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#6a00d4"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "blueviolet"; }}
            >
              <i className="fa fa-external-link" style={{ fontSize: "13px" }} />
              Live
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Animated floating number decoration
const FloatingIndex = ({ n }) => (
  <motion.span
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: n * 0.08 }}
    style={{
      fontFamily: "'opensans-bold', sans-serif",
      fontSize: "120px",
      color: "rgba(138,43,226,0.04)",
      lineHeight: 1,
      userSelect: "none",
      position: "absolute",
      top: "-20px",
      left: "-10px",
      zIndex: 0,
      fontWeight: 900,
    }}
  >
    {String(n + 1).padStart(2, "0")}
  </motion.span>
);

const Portfolio = ({ data, loading }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    if (!headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        padding: "90px 0 80px",
        background: "#f8f7fc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,43,226,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,43,226,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="row">
        {/* Section heading — matches site's three-col / header-col layout exactly */}
        <div className="three columns header-col" ref={headingRef}>
          <h1>
            <span>Works</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {loading ? (
            <div className="flex items-center justify-center" style={{ height: "320px" }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "4px solid rgba(138,43,226,0.15)",
                  borderTopColor: "blueviolet",
                }}
              />
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {data?.length > 0 ? (
                data.map((project, index) => (
                  <div key={project._id || index} className="relative">
                    <FloatingIndex n={index} />
                    <ProjectCard project={project} index={index} />
                  </div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-20"
                >
                  <i
                    className="fa fa-folder-open"
                    style={{ fontSize: "56px", color: "#d1c4e9", marginBottom: "16px", display: "block" }}
                  />
                  <p
                    style={{
                      fontFamily: "'opensans-regular', sans-serif",
                      color: "#838c95",
                      fontSize: "16px",
                    }}
                  >
                    No projects found. Check back soon!
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
