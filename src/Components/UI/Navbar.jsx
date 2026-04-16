import { NavLink } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  

  const ShowMenu = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <>
      <div className={`
      layout-container flex items-center justify-between   h-16  text-white  `}>
        <div className="logo flex items-center gap-3">
          {mobileMenu ? (
            <IoClose
              className="md:hidden text-2xl cursor-pointer"
              onClick={ShowMenu}
            />
          ) : (
            <GiHamburgerMenu
              className="md:hidden text-2xl cursor-pointer"
              onClick={ShowMenu}
            />
          )}

          <p className=" text-xl   tracking-wide text-color font-semibold hover:drop-shadow-[0_0_10px_#38bdf8] transition-all duration-300 ">
            poojachavhan
          </p>
        </div>

        <nav className="hidden  md:block">
          <ul className="flex gap-6  flex-col  md:flex-row ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        {/* <div>
          <IoMoonOutline className=" md:block cursor-pointer" />
        </div> */}
      </div>

      {/* Side Menu */}
      <div
        className={`menu 
          md:hidden fixed top-20 left-0 w-[85%] max-w-[400px] h-[calc(100vh-4rem)] bg-gray-800 text-sky-400 backdrop-blur-lg p-8 shadow-xl shadow-black rounded-r-xl z-50 
          transform transition-transform duration-300 ease-in-out
           ${mobileMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col gap-8 text-left text-lg border-r border-white/10 hover:text-sky-300 transition-all duration-200">
          <li>
            <NavLink
              className="px-2 py-1 hover:text-sky-300 active:bg-white/20 rounded-md"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-2 py-1 hover:text-sky-300 active:bg-white/20 rounded-md"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-2 py-1 hover:text-sky-300 active:bg-white/20 rounded-md"
              to="/skills"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-2 py-1 hover:text-sky-300 active:bg-white/20 rounded-md"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-2 py-1 hover:text-sky-300 active:bg-white/20 rounded-md"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
