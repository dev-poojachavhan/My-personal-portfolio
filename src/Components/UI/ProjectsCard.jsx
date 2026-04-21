  import React from "react";


  export const ProjectsCard = ({ projectDetails }) => {
    
    const { Title, summary, image} = projectDetails;

    return (
     
     <li
  className="
  reveal w-64 md:w-74 rounded-2xl md:h-[370px] overflow-hidden 
  group border border-[1.5px] border-white/30 
  bg-[#020617]/70 backdrop-blur-md relative
  will-change-transform
  shadow-purple-2xl 
  transition-transform duration-3000 ease-[cubic-bezier(0.25,0.5,0.25,1)]

   hover:scale-[1.021] hover:shadow-[0_12px_50px_rgba(168,85,247,0.25)]
  "
  style={{ transitionDelay: `${projectDetails.id * 0.15}s` }}
>
        <div className="w-full md:h-[170px] h-[120px] overflow-hidden relative">
          <img
            src={image}
            className="card-img-top w-full h-full group-hover:scale-105
             transition-transform duration-300 ease-[cubic-bezier(0.25,0.5,0.25,1)] object-cover"
            alt="project card-Image"
          />
        {/* {overlay} */}
         <div
  className="
  absolute inset-0 bg-black/30 opacity-0
  group-hover:opacity-100
  transition-opacity duration-300 ease-[cubic-bezier(0.25,0.5,0.25,1)]
  "
></div>
   
  
        </div>
        <div
  className="
  card-body w-full h-[180px] md:h-[200px] 
  flex flex-col justify-center gap-5 p-5 
  text-[#E3E3E3] bg-[#020617]/80 backdrop-blur-md 
  transition-all ease-[cubic-bezier(0.25,0.5,0.25,1)]
  "
>
          <h5 className="card-title text-md font-semibold">{Title}</h5>
         
          <p className="card-text text-sm text-slate-400">
          {summary}
          </p>
          <div className=" flex justify-between ">
            <button className="w-20 h-8 rounded-md text-sm font-medium 
bg-gradient-to-r from-purple-500 to-pink-500
hover:from-purple-400 hover:to-pink-400">
              Live
            </button>
            <button className="w-24 h-9 rounded-md text-sm font-medium 
border border-purple-400/40 
text-purple-300 
bg-transparent 
hover:bg-purple-500/10 
hover:text-white 
hover:border-purple-400 
transition-all duration-300 
active:scale-95">
              view code
            </button>
          </div>
        </div>
      </li>
    );
  };
