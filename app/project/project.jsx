import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Project = () => {
  const variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className="py-10 bg-gray-50"
      id="project"
    >
      <motion.div
        variants={variants}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4" id="project">
          {/* Judul Section */}
          <h1 className="font-bold text-3xl md:text-4xl text-center mb-4">
            My Projects
          </h1>
          <p className="font-light text-gray-600 text-center mb-8">
            This page showcases the results of my projects.
          </p>
          {/* Grid untuk Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <img
                src="p.1.png"
                alt="projects1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="font-light text-gray-600 text-center mb-4">
                  This project is a rental website where users can view rental
                  listings and contact information integrated with WhatsApp.
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="https://website-kontrakan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-500 hover:text-cyan-600 transition-colors duration-300"
                  >
                    Click Me!
                  </a>
                  <div>
                    <FontAwesomeIcon
                      icon={faReact}
                      size="2x"
                      color="cyan"
                      className="hover:text-cyan-500"
                    />
                    {/* <button className="btn btn-outline text-sm">ReactJS</button> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <img
                src="p.2.png"
                alt="projects2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <p className="font-light text-gray-600 text-center mb-4">
                  This project is a personal coffee website where users can view
                  drink and food menus, with contact integration via WhatsApp.
                </p>
                <div className="flex justify-between items-center ">
                  <a
                    href="https://website-kopi-ten.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-gray-500 hover:text-cyan-600 transition-colors duration-300"
                  >
                    Click Me!
                  </a>
                  <div className="flex gap-x-4">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      size="2x"
                      color="orange"
                      className="hover:text-orange-600"
                    />
                    <FontAwesomeIcon
                      icon={faCss3Alt}
                      size="2x"
                      color="blue"
                      className="hover:text-blue-800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Project;
