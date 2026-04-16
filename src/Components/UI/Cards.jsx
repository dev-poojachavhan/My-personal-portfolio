import React from "react";

export const Cards = ({ techDetails, pourState, index }) => {
  const { techName, icon, color } = techDetails;

  const delay = 1.5 + index * 0.5;

  return (
    <div
      className={`${pourState ? "displayCard" : "hideCard"} skills-glow card`}
      style={{
        animationDelay: `${1.5 + index * 0.3}s`,
      }}
    >
      <li>
        <div
          className="card-inner shadow-sm shadow-slate-500
                      rounded-md w-[90px] h-[110px]  border border-purple-800 flex flex-col items-center justify-around 
                      md:w-[140px] md:h-[170px]"
        >
          {/* {inner icons of card} */}
          <div
            className={`text-4xl md:text-5xl text-slate-300 
                        card ${pourState ? "show" : "hide"}`}
            style={{ transitionDelay: `${delay + 0.3}s` }}
          >
            <span style={{ color: color }}>{icon}</span>
          </div>

          <p className="text-white text-lg md:text-2xl  mb-3">{techName}</p>
        </div>
      </li>
    </div>
  );
};
