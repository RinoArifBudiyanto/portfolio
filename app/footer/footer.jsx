import React from "react";
import { faLocationDot, faTelegram } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const contact = () => {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto px-4  items-center py-5 text-white">
        <h1 className="font-bold text-xl">
          &copy; Copyright by{" "}
          <span className="text-cyan-400"> Rino Arif Budiyanto </span>
        </h1>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>JL.Sinarmulya VIII NO 26</p>
        <div className="space-x-5">
          <a href="" target="_blank" rel="noopener noreferrer"></a>
          <FontAwesomeIcon icon={faTelegram} />
          <a href="" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default contact;
