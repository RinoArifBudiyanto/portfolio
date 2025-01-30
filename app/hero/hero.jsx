import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, x: 50 },
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
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col-reverse md:flex-row px-16 justify-between py-10 items-center">
          <div className="mt-4 md:py-3 lg:text-2xl text-2">
            <h1 className="font-semibold">
              Hello! my name is Rino{" "}
              <span className="text-cyan-500">Arif Budiyanto</span>
            </h1>
            <h2 className="font-bold">Front End Developer</h2>
            <p>
              If you're interested in becoming a Frontend Developer,let's start
              learning <br />
              HTML, CSS, JavaScript, along with their frameworks. Keep up the
              spirit!
            </p>
            <a
              href="CvRino.pdf"
              className="bg-cyan-400 p-3 rounded-full mt-4 inline-block text-center text-white"
            >
              Download CV
            </a>
            <div className="mt-4 space-x-5">
              <a
                href="https://www.linkedin.com/in/rinoarifbudiyanto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077b5" />
              </a>
              <a href="https://github.com/RinoArifBudiyanto">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
              </a>
            </div>
          </div>
          <div className="w-64 shadow-lg rounded-2xl ">
            <img src="hero.jpg" alt="" className="rounded-2xl" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
