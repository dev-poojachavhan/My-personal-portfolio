import profileImage from "../../assets/profileImage.jpg";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export const Hero = () => {
  return (
    <div
      className="w-full flex justify-center items-center
      md:w-full min-h-screen  lg:h-[90vh] overflow-hidden
     bg-gray-900 layout-container"
    >
      <div
        className="flex  justify-between items-center   
      w-[50%] h-full md:w-full md:h-full  md:flex-row "
      >
        <div
          className="md:w-full md:flex-row  flex flex-col-reverse justify-center items-center  
         "
        >
          <div className="name-div w-full h-full flex justify-center items-center ">
            <div className=" flex flex-col gap-4 text-sky-500 text-center  md:text-left">
              <p className="text-gray-400 text-sm md:text-md mt-1">Hi, I'm</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-color">
                Pooja Chavhan{" "}
              </h1>
              <h2 className="text-xl sm:text-xl md:text-3xl font-semibold text-sky-100">
                FRONTEND DEVELOPER
              </h2>

              <div>
                <p className="text-gray-400 ">
                  Crafting clean, responsive web experiences.
                </p>
              </div>

              <div className="mt-12">
                <div className="flex gap-5 ">
                  <a
                    href="/resume.pdf"
                    download
                    className=" px-3 py-1 sm:px-4 sm:py-1.5 text-sm md:px-5   md:py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition inline-block"
                  >
                    Download CV
                  </a>
                  <nav>
                    <NavLink
                      to="/contact"
                      className="flex gap-2 items-center text-sky-400 hover:gap-3 transition-all "
                    >
                      Contact
                      <span>
                        <FaArrowRight />
                      </span>
                    </NavLink>
                  </nav>
                </div>
              </div>

              <div className="links-div flex gap-5 items-center text-2xl text-sky-200 mt-5">
                {/* GitHub */}
                <a
                  href="https://github.com/poojaGit-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#38bdf8]
                   hover:-translate-y-1 transition-all duration-300  "
                  />
                </a>

                {/* Email */}
                <a href="mailto:poojachavhan179@gmail.com">
                  <IoMailOutline
                    className="hover:text-sky-400 hover:drop-shadow-[0_0_10px_#38bdf8]
                   hover:-translate-y-1 transition-all duration-300 "
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            className="profile-pic justify-center items-center
              md:w-full md:h-full
          flex relative"
          >
            {/* profile-Image*/}
            <div
              className="
              w-36 h-36  flex-col justify-center items-center
              md:w-60 md:h-60 sm:w-40 sm:h-40 border-8 border-sky-500 shadow-[0_0_30px_#38bdf8] rounded-full  flex  overflow-hidden 
              animate-[float_5s_ease-in-out_infinite]
            "
            >
              <img
                src={profileImage}
                alt="Pooja Chavhan profile photo"
                className=" w-full h-full object-cover 
                
               "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
