import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const Sertifikat = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openCert, setOpenCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/data/certificates.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch certificates");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setCertificates(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching certificates:", error);
        setLoading(false);
      });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="font-bold text-2xl text-center">My Certificate</h1>
      <p className="font-light text-gray-400 text-center">
        These are my certificates and achievements.
      </p>

      {loading ? (
        <p className="text-center text-gray-500 mt-5">Loading certificates...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 mt-5">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-gray-200 rounded-lg shadow-md transition-all duration-500">
              <button
                className="w-full flex justify-between items-center bg-gray-300 p-3 text-gray-700 hover:bg-gray-400 rounded-lg transition-colors duration-300"
                onClick={() => setOpenCert(openCert === cert.id ? null : cert.id)}
              >
                <span>{cert.title}</span>
                {openCert === cert.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <div 
                className={`transition-max-height duration-500 overflow-hidden ${openCert === cert.id ? 'max-h-96' : 'max-h-0'}`}
              >
                {openCert === cert.id && (
                  <div className="p-3">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                        loading="lazy"
                        onClick={() => openModal(cert.image)}
                      />
                      <p className="font-light text-gray-500 text-center p-3">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50 transition-opacity duration-300 opacity-100">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full transform transition-transform duration-300 scale-100">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-300"
              onClick={() => setModalOpen(false)}
            >
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Full Size" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sertifikat;
