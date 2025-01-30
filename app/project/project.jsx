import React from "react";
import { motion } from "framer-motion";
const project = () => {
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
        <div>
          <h1 className="font-bold text-2xl text-center p-5">My Projects</h1>
          <p className="font-light text-gray-600 text-center">
            This page is the result of my project
          </p>
          <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div className="shadow-lg rounded-lg">
              <img src="p.1.png" alt="projects1" />
              <p className="font-light text-gray-400 text-center p-2">
                This project is a rental website, the system contained in which
                users can see the page of the rental and available contacts that
                have been integrated into whatshapp.
              </p>
              <div className="font-bold pl-5 pb-2 hover:text-cyan-500">
                <a
                  href="https://website-kontrakan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Me!
                </a>
              </div>
              <button className="btn btn-outline ml-4 ">ReactJS</button>
            </div>
            <div className="shadow-lg rounded-lg">
              <img src="p.2.png" alt="projects2" />
              <p className="font-light text-gray-400 text-center p-2">
                This project is a personal coffee website, the system contained
                in which users can see the drink and food menu pages and have
                been integrated into whatshapp.
              </p>
              <div className="font-bold pl-5 pb-2 hover:text-cyan-500">
                <a
                  href="https://website-kopi-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click Me!
                </a>
              </div>
              <button className="btn btn-outline ml-4 mb-1">HTML</button>
              <button className="btn btn-outline ml-4 mb-1">CSS</button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default project;
