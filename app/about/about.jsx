import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <motion.div
        variants={variants}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }} // Durasi lebih panjang untuk animasi yang lebih halus
      >
        <div className="px-16 py-4 bg-slate-100  text-xl">
          <div className="text-center font-bold">
            <h1 className="text-2xl">About Me</h1>
          </div>
          <p className="text-gray-700 mt-4">
            I am a fresh graduate from Gunadarma University majoring in
            Information Systems. I have experience in Front-End Web Development
            and am skilled in using various software such as Figma, Visual
            Studio Code, as well as programming languages like JavaScript, CSS,
            and the ReactJS framework. With the skills and experience I have, I
            have successfully completed projects such as E-commerce, business
            management, and company profiles.
          </p>
          <p className="text-gray-700">
            When I was in college, I made several website projects, namely
            private rentals using the Javascript programming language using the
            ReactJS framework, creating a website-based application using the
            PHP programming language. There it was explained about the plants
            that the client would buy.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
