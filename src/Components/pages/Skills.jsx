import React, { useEffect, useState } from "react";
import { Cards } from "../UI/Cards";

import { FaReact } from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import flaskImage from "../../assets/images/flaskImage.png";


export const Skills = () => {
  const [pour, setPour] = useState(false);

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

  useEffect(() => {
    setTimeout(() => setPour(true), 800);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative bg-app "
      style={{
        background: `
      radial-gradient(circle at 30% 50%, rgba(96,165,250,0.45), transparent 45%),
    radial-gradient(circle at 70% 60%, rgba(192,132,252,0.35), transparent 50%),
    linear-gradient(to bottom, #1e293b, #0f172a)
    `,
      }}
      //  {/*****cyan
      // //  radial-gradient(circle at 40% 40%, rgba(34,211,238,0.4), transparent 45%),
      // // radial-gradient(circle at 70% 60%, rgba(99,102,241,0.35), transparent 50%),
      // // linear-gradient(to bottom, #1e293b, #020617) ****/}
    >
      <div className="relative flex justify-end w-full h-500px ">
        <div className={`flask-wrapper ${pour ? "tilt" : ""}`}>
          <img src={flaskImage} alt="Image of flask" />

          <div className="liquid-mask">
            <div className="liquid"></div>
          </div>
        </div>

        <div className=" w-[100px] h-[100px]  top-44 right-50 text-white text-2xl relative ">
          {techSkills.map((item, index) => (
            <div
              key={item.id}
              className={`icon-drop ${pour ? "drop" : ""}`}
              style={{ animationDelay: `${1.6 + index * 0.6}s` }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 bg-black/30 backdrop-blu
  r-2xl flex justify-center items-end"
      >
        <ul className="flex justify-between items-center gap-10 ">
          {techSkills.map((curElem) => {
            return (
              <Cards key={curElem.id} techDetails={curElem} pourState={pour} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
