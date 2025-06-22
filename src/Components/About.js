import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const About = ({ data }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    // Animate section fade with parallax effect
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power4.out",
    });

    // Profile image: scale & slide in
    gsap.from(image, {
      scrollTrigger: {
        trigger: image,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -80,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Content with staggered text and bounce feel
    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: 80,
      duration: 1.2,
      ease: "power3.out",
    });

    // Fade in each paragraph or heading inside content
    gsap.from(content.querySelectorAll("h2, p, .address, .download"), {
      scrollTrigger: {
        trigger: content,
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, []);

  if (!data) return null;

  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resumedownload,
  } = data;

  const profilepic = "images/" + image;

  return (
    <section id="about" ref={sectionRef}>
      <div className="row">
        <div id="small" className="three columns" ref={imageRef}>
          <img
            className="profile-pic"
            src={profilepic}
            alt={`${name}'s Profile Pic`}
          />
        </div>

        <div className="nine columns main-col" ref={contentRef}>
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  <b>Street:</b> {street}
                  <br />
                  <b>City:</b> {city} {state}, {zip}
                </span>
                <br />
                <b>Phone:</b> <span>{phone}</span>
                <br />
                <b>Email:</b> <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={resumedownload}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  id="cv"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i> View
                  Curriculum Vitae (CV)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
