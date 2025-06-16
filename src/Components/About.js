import React from "react";
import { motion } from "framer-motion";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} // Animates when section enters view
      viewport={{ once: true }} // Animates only the first time
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="row">
        <motion.div
          id="small"
          className="three columns"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }} // Animates when this comes into view
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            className="profile-pic"
            src={profilepic}
            alt={`${name}'s Profile Pic`}
          />
        </motion.div>

        <motion.div
          className="nine columns main-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }} // Animates when this comes into view
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  <b>Street: </b> {street}
                  <br />
                  <b>City: </b> {city} {state}, {zip}
                </span>
                <br />
                <b>Phone: </b> <span>{phone}</span>
                <br />
                <b>Email: </b> <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a
                  href={resumeDownload}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                  id="cv"
                >
                  <i className="fa fa-eye" aria-hidden="true"></i>View
                  Curriculum Vitae (CV)
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
