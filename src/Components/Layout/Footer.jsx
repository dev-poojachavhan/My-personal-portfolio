import React from 'react'

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="layout-container border-t border-white/10 bg-[#101727]  py-10 text-gray-300">
      
      <div className="max-w-6xl  flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LEFT */}
        <div>
          <h2 className="text-xl   tracking-wide text-color font-semibold hover:drop-shadow-[0_0_10px_#38bdf8] transition-all duration-300">poojachavhan</h2>
         
        </div>

        {/* CENTER */}
        <div className="flex flex-col md:flex-row justify-center gap-6 text-sm">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end gap-5 text-lg">
          <a href="#" className="hover:text-white hover:scale-110 transition">
            <FaGithub />
          </a>
          <a href="#" className="hover:text-white hover:scale-110 transition">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-white hover:scale-110 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-8 text-center text-sm text-gray-500  pt-4">
        © {new Date().getFullYear()} Pooja Chavhan. All rights reserved.
      </div>
    </footer>
  );
};
