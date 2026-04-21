import profileImage from "../../assets/images/profileImage1.png";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import disc from "../../assets/images/disc.png"
import { useReveal } from "../hooks/useReveal";

export const Hero = () => {

  const revealRef = useReveal()

  
  return (
    <div ref={revealRef} id="home"
      className=" w-full  flex justify-center items-center min-h-screen  
                 bg-gray-900 layout-container"
    >
        {/* Container */}
      <div className="  flex flex-col justify-between items-center w-full min-h-full  
       md:h-full  md:flex-row  gap-8 py-10  ">

         {/* LEFT CONTENT */}
        <div className="md:w-full md:flex-row text-center flex flex-col-reverse justify-center items-center reveal">
          <div className="name-div w-full h-full flex justify-center items-center ">
            <div className=" flex flex-col gap-4 text-center  md:text-left">
              <p className="text-gray-400 text-sm md:text-md mt-1">Hi, I'm</p>
              <h1 className="pb-2 text-4xl sm:text-4xl md:text-6xl font-bold gradient-text">
                Pooja Chavhan{" "}
              </h1>
             

              <div>
                 <h2 className="text-xl sm:text-xl md:text-3xl font-semibold mb-1  text-gray-400">
                FRONTEND DEVELOPER
              </h2>
                <p className="text-gray-500 text-sm md:text-md ">
                  Crafting clean, responsive web experiences.
                </p>
              </div>

              <div className="mt-6 ">
                <div className="flex gap-5 items-center justify-center md:justify-start ">
                  <a
                    href="/resume.pdf"
                    download
                    className="  py-1 sm:px-4 sm:py-1.5 text-sm  md:py-1 
                               text-[#FEC5F6] rounded-lg hover:border hover:border-purple-400 transition inline-block"
                  >
                    Download CV
                  </a>
                  <nav>
                    <NavLink
                      to="/contact"
                      className="group flex gap-2 items-center text-[#FEC5F6] hover:gap-3 
                              hover:text-white
                                hover:drop-shadow-2xl hover:drop-shadow-cyan-400
                                 transition-all duration-200"
                    >
                      Contact
                      <span className=" group-hover:translate-x-1">
                        <FaArrowRight />
                      </span>
                    </NavLink>
                  </nav>
                </div>
              </div>

              <div className="links-div flex gap-5 items-center justify-center md:justify-start text-purple-200 text-2xl mt-5">
                {/* GitHub */}
                <a
                  href="https://github.com/dev-poojachavhan"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="hover:text-purple-500 hover:drop-shadow-[0_0_15px_#38bdf8]
                                hover:-translate-y-1 transition-all duration-300  "
                  />
                </a>

                {/* Email */}
                <a href="mailto:poojachavhan179@gmail.com">
                  <IoMailOutline
                    className="hover:text-purple-500 hover:drop-shadow-[0_0_15px_#38bdf8]
                              hover:-translate-y-1 transition-all duration-300 "
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="profile-pic justify-center items-center
                       md:w-full md:h-full flex relative "
          >
            {/* profile-Image*/}
            <div
              className=" reveal
              w-32 h-38  flex-col justify-center items-center
              md:w-64 md:h-80 sm:w-36 sm:h-40 border-5 border-purple-400 shadow-[0_0_20px_#38bdf8] rounded-full  flex  overflow-hidden 
              animate-[float_5s_ease-in-out_infinite]  relative z-25 
            "
            >
              <img
                src={profileImage}
                alt="Pooja Chavhan profile photo"
                className=" w-full h-full object-cover relative
                
               "
              />
            </div>

            <img src={disc} alt=""
              className="opacity-0 overflow-hidden animate-disc absolute 
               md:left-[600px] md:top-[-250px] w-[200px] h-[350px] top-[-350]
              
              "
            //    animate-disc absolute  left-[600px] top-[-250px]  w-[200px] h-[350px]
            // 
            />
          </div>
        </div>
      </div>
    </div>
  );
};
