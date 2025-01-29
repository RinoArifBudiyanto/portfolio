import React from "react";
import { motion } from "framer-motion";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const service = () => {
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
          <h1 className="text-center font-bold text-2xl p-5">My Service</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="bg-slate-200 rounded p-2">
              <h2 className="text-center font-bold text-xl">
                Front End Development
              </h2>
              <FontAwesomeIcon icon={faCode} className="size-10 pl-4" />
              <p className="pt-3">
                I have experience in creating web-based applications, such as
                interactive e-commerce landing pages.
              </p>
              <p className="font-bold pt-2">Tools : VSCode</p>
            </div>
            <div className=" bg-slate-200 p-2 h-48">
              <h2 className="text-center font-bold text-xl">UI/UX</h2>
              <FontAwesomeIcon icon={faPalette} className="size-10 pl-4" />
              <p className="pt-2">
                I have high creativity in terms of design, such as creating
                landing pages, personal websites and wireframes.
              </p>
              <p className="font-bold pt-3">Tools : Figma</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default service;
