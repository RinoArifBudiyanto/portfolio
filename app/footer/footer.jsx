import React from "react";
import {
  faWhatsapp,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const contact = () => {
  return (
    <div className="footer bg-blue-500  shadow mt-20 text-white " id="contact">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4 font-bold">
          &copy; Copyright by{" "}
          <span className="text-sky-400 ">Rino Arif Budiyanto</span>
        </p>
        <div className="alamat">
          <p className="font-bold space-x-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>JL.Sinarmulya VIII NO 26</span>
          </p>
        </div>
        <div className="social-footer flex items-center sm:gap-7 gap-2 text-2xl">
          <a href="https://twitter.com/RinoArifBudiyanto" >
            <FontAwesomeIcon icon={faTelegram} className="hover:text-cyan-400"/>
          </a>
          <a href="https://www.linkedin.com/in/rinoarifbudiyanto/">
            <FontAwesomeIcon icon={faLinkedin}className="hover:text-cyan-400" />
          </a>
          <a href="https://wa.me/6281287009000" target="_blank">
            <FontAwesomeIcon icon={faWhatsapp}className="hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </div>
    // <div className="bg-blue-600">
    //   <div className="mx-auto px-4  items-center py-5 text-white">
    //     <h1 className="font-bold text-xl">
    //       &copy; Copyright by{" "}
    //       <span className="text-cyan-400"> Rino Arif Budiyanto </span>
    //     </h1>
    //     <FontAwesomeIcon icon={faLocationDot} />
    //     <p>JL.Sinarmulya VIII NO 26</p>
    //     <div className="space-x-5">
    //       <a href="" target="_blank" rel="noopener noreferrer"></a>
    //       <FontAwesomeIcon icon={faTelegram} />
    //       <a href="" target="_blank" rel="noopener noreferrer"></a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default contact;
