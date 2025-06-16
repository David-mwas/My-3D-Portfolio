import React from "react";
import { motion } from "framer-motion";

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (item, index) {
      return (
        <motion.li
          key={item.user}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
        >
          <blockquote>
            <p>{item.text}</p>
            <cite>{item.user}</cite>
          </blockquote>
        </motion.li>
      );
    });
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
