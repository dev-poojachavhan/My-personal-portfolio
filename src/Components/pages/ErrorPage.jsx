import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import errorPageimg from "../../assets/images/Error.png";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6">
      <div className="flex flex-col items-center text-center gap-6 mt-[-40px] animate-fadeInUp">
        {/* IMAGE */}
        <img
          src={errorPageimg}
          alt="404"
          className="max-w-sm md:max-w-md w-full object-contain 
      drop-shadow-[0_0_40px_rgba(255,0,0,0.15)] animate-float"
        />

        {/* TEXT */}
        <p className="text-gray-400 max-w-md leading-relaxed">
          The page you're looking for doesn’t exist or has been moved. Let’s get
          you back on track.
        </p>

        {/* BUTTONS */}
 <div className="flex gap-4 mt-2">
        <NavLink
          to="/"
          className="px-6 py-2 rounded-xl bg-red-500 
  hover:bg-red-600 hover:scale-105 
  transition-all duration-300"
        >
          Go Home
        </NavLink>

       
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl border border-white/20 
    hover:bg-white/10 hover:scale-105 
    transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
