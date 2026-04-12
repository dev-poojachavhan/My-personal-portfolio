import React from "react";
import aboutImage from "../../assets/images/about1.webp";

export const About = () => {
  return (
  
  
    <div
      className="layout-container max-w-full min-h-screen  bg-gray-900  
                 flex justify-center flex-col gap-10 py-10"
    >
      <div
        className="max-w-6xl w-full mx-auto bg-transparent rounded-xl p-6 md:p-8 
                    flex flex-col gap-8 items-start md:items-center"
      >
        <div
          className="about-img w-full flex flex-col md:flex-row  justify-between
                       items-center gap-10"
        >
          {" "}
          {/* 🔥 Glow background ( HERE) */}
          <div className="relative flex justify-center items-center [perspective:1000px]">
            <div
              className="absolute top-1/2 left-1/2 
                         -translate-x-1/2 -translate-y-1/2
                         w-[320px] h-[320px] md:w-[400px] md:h-[400px]
                         bg-gradient-to-br from-cyan-400/10 to-purple-500/10
                         blur-3xl rounded-full"
            ></div>

            {/* Image */}
            <img
              src={aboutImage}
              alt="about image avatar"
              className="relative h-auto max-h-[420px] md:w-[320px] object-contain
                         drop-shadow-2xl drop-shadow-cyan-400/50
                         image-3d 
                         hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            className="about-text w-full md:w-[60%] flex flex-col justify-start 
                     bg-gray-900/80 backdrop-blur  "
          >
            <h1 className=" text-3xl font-bold gradient-text text-left ">
              About Me
            </h1>

            <div className="mt-6  text-gray-200">
              <p className="leading-relaxed text-sm md:text-base">
                I’m a Frontend Developer focused on building scalable,
                performant, and user-centric web applications. My work is
                grounded in writing clean, maintainable code and translating
                complex requirements into intuitive interfaces. I specialize in
                modern JavaScript ecosystems, particularly React, and build
                responsive layouts using utility-first approaches like Tailwind
                CSS.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*---------Experience Section---------*/}

      <h1 className="text-center">
        <span
          className="bg-gradient-to-r from-purple-400 via-[#a4449c] to-purple-400 
                         bg-clip-text text-transparent 
                         text-3xl font-bold m-2 "
        >
          Experience
        </span>
      </h1>

      <div className=" w-full flex flex-col justify-center items-center px-4  ">
        <div
          className="max-w-4xl  bg-gray-900 w-full p-8 rounded-xl
                   border border-purple-500/20 
                   shadow-lg shadow-purple-500/10
                   hover:shadow-purple-400/40 transition text-center"
        >
          <h3 className="text-xl font-semibold text-white ">
            Frontend Developer (Freelance)
          </h3>

          <p className="text-sm text-gray-400 mt-1">Client Project • 2025</p>

          <ul className="mt-8 text-gray-300 space-y-2 text-sm leading-relaxed ">
            <li>• Developed a responsive company website</li>
            <li>• Built reusable UI components</li>
            <li>• Ensured mobile-first design</li>
          </ul>

          <p className="mt-3 text-sm text-purple-400">Tech: React, Tailwind</p>

          <a
            href="#"
            className="inline-block mt-4 text-sm text-purple-300 hover:text-white transition"
          >
            🔗 View Live Project
          </a>
        </div>
      </div>
    </div>
  );
};
