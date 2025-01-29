// import Image from "next/image";
"use client";

import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import About from "./about/about"
import Service from "./service/service"
import Project from "./project/project"


export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About/>
      <Service/>
      <Project/>
    </div>
  );
}
