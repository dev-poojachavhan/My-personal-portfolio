import React, { useEffect, useMemo, useState } from "react";
import { Cards } from "../UI/Cards";

import { FaReact } from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import flaskImage from "../../assets/images/flaskImage.png";

export const Skills = () => {
  const [pour, setPour] = useState(false);
  const isMobile = window.innerWidth < 768;

  const techSkills = [
    {
      id: 1,
      techName: "HTML5",
      icon: <FaHtml5 />,
      color: "#E34F26",
    },

    {
      id: 2,
      techName: "CSS",
      icon: <IoLogoCss3 />,
      color: "#1572B6",
    },

    {
      id: 3,
      techName: "JavaScript",
      icon: <BsJavascript />,
      color: "#F7DF1E",
    },
    {
      id: 4,
      techName: "React",
      icon: <FaReact />,
      color: "#61DAFB",
    },
    {
      id: 6,
      techName: "GitHub",
      icon: <FaGithub />,
      color: "#ffffff",
    },
  ];

  // Trigger pour animation
  useEffect(() => {
    const timer = setTimeout(() => setPour(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // {icons precalulated values}
  const iconPositions = useMemo(() => {
    return techSkills.map((_, index) => {
      const angle = (index / techSkills.length) * Math.PI * 2;

      // responsive radius
      const baseRadius = isMobile ? 12 : 28;
      const spread = isMobile ? 10 : 30;

      const radius = baseRadius + Math.random() * spread;

      return {
        x: Math.cos(angle) * radius,
        y: Math.abs(Math.sin(angle)) * radius, // keeps icons in lower liquid area
      };
    });
  }, [isMobile]);

  return (
    <div
      className="pt-20 min-h-screen w-full  relative layout-container flex flex-col items-center gap-1  "
      style={{
        background: ` 
          radial-gradient(circle at 20% 40%, rgba(168,85,247,0.15), transparent 40%),
          radial-gradient(circle at 80% 60%, rgba(59,130,246,0.1), transparent 50%),
          linear-gradient(to bottom, #020617, #0f172a)`,
      }}
    >
      {/* Bubbles */}

      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${20 + i * 5}%`,
            animationDuration: `${6 + i * 2}s`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Title */}
      <h1 className="text-3xl  font-bold text-center mt-2 py-5 gradient-text md:text-4xl md:py-8">
        Skills
      </h1>
      <p className="text-slate-300  text-[12px] md:text-base text-center max-w-md">
        Technologies I use to build modern web experiences
      </p>

      {/* Flask + Icons */}
      <div
        className="relative flex justify-center md:justify-end w-full 
   h-[220px] md:h-[300px]"
      >
        {/* Flask */}
        <div
          className={` ${isMobile ? "flask-wrapper" : "mobile-flask-wrapper"} 
           ${pour ? "tilt" : ""}
           w-[200px] h-[200px] md:w-[380px] md:h-[350px]`}
        >
          <img src={flaskImage} alt="Image of flask" className="flask-img" />

          <div
            className="liquid-mask w-[75px] h-[90px] bottom-[20px] right-[55px]
           md:w-[125px] md:h-[150px] md:bottom-[36px] md:left-[130px]"
          >
            <div
              className="liquid  md:w-[115%] md:h-[180%] md:top-0
              w-[70%] h-[100%]  "
            ></div>
          </div>

          {/* Icons inside flask */}

          <div
            className="absolute bottom-[18px] left-[50px] w-[64] h-[80] text-lg
           md:bottom-[36px] md:left-[130px] w-[120px] h-[150px] pointer-events-none text-white md:text-2xl"
          >
            <div className="relative  w-full h-full ">
              {techSkills.map((item, index) => {
                const { x, y } = iconPositions[index];

                return (
                  <div
                    key={item.id}
                    className={`icon-drop ${pour ? "drop" : ""}`}
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${pour ? 1 : 0.7})`,

                      animationDelay: `${index * 0.7}s`,
                      animationDuration: `${2 + index}s`,
                    }}
                  >
                    {item.icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="cards-container w-full md:h-[150px] h-[240px]  flex justify-center items-end  ">
        <ul
          className="flex flex-wrap h-full  justify-center items-end md:flex-nowrap
  gap-4 md:gap-10  "
        >
          {techSkills.map((curElem, index) => {
            return (
              <Cards
                key={curElem.id}
                techDetails={curElem}
                pourState={pour}
                index={index}
              />
            );
          })}
        </ul>
      </div>

      {/* {divider} */}
      <div className="md:my-5 my-10 text-center text-slate-500 text-sm">
        More technologies coming soon...
      </div>
    </div>
  );
};
