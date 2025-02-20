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
        <div
          className="flex flex-col-reverse md:flex-row px-4 md:px-16 justify-between py-10 items-center"
          id="home"
        >
          {/* Bagian Teks */}
          <div className="mt-4 md:mt-0 md:py-3 text-center md:text-left">
            <h1 className="font-semibold text-2xl lg:text-3xl">
              Hello world, i'm Rino{" "}
              <span className="text-cyan-500">Arif Budiyanto</span>
            </h1>
            <h2 className="font-bold text-xl lg:text-2xl mt-2">
              Front End Developer
            </h2>
            <p className="font-bold text-lg lg:text-xl mt-2">
              Welcome to My{" "}
              <span className="text-cyan-500">personal website 🙌</span>
            </p>
            <p className="text-gray-400 pt-2 text-sm lg:text-base">
              If you're interested in becoming a Frontend Developer, let's start
              learning <br />
              HTML, CSS, JavaScript, along with their frameworks. Keep up the
              spirit!
            </p>
            <a
              href="CV - Rino Arif Budiyanto.pdf"
              target="_blank"
              className="bg-cyan-500 p-3 rounded-full mt-4 inline-block text-center text-white hover:bg-cyan-400 transition duration-300"
            >
              Download CV
            </a>
            <div className="mt-4 space-x-5 flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/rinoarifbudiyanto/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  color="blue"
                  className="hover:text-cyan-200 transition duration-300"
                />
              </a>
              <a
                href="https://github.com/RinoArifBudiyanto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="hover:text-cyan-200 transition duration-300"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="hover:text-cyan-200 transition duration-300"
                />
              </a>
            </div>
          </div>
          {/* Bagian Gambar */}
          <div className="rounded-3xl bg-gray-100 w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px] mt-8 md:mt-0 ">
            <img
              src="hero.jpg"
              alt="hero1"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
