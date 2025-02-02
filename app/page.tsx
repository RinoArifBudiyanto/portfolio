// import Image from "next/image";
"use client";

import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import About from "./about/about";
import Service from "./service/service";
import Project from "./project/project";
import Sertifikat from "./sertifikat/sertifikat";
import Footer from "./footer/footer";

// import Certificates from "../public/data/certificates.json";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Sertifikat />
      <Footer />
    </div>
  );
}
