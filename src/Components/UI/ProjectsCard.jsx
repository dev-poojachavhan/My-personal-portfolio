  import React from "react";


  export const ProjectsCard = ({ projectDetails }) => {
    
    const { Title, summary, image} = projectDetails;

    return (
     
      <li
        className=" w-74 rounded-2xl h-[370px] overflow-hidden group border border-[1.5px] border-white/30 bg-transparent relative z-10 
        shadow-purple-2xl hover:shadow-xl transition-shadow duration-300  "
      >
        <div className="w-full h-[170px] overflow-hidden relative">
          <img
            src={image}
            className="card-img-top w-full h-full  group-hover:scale-110 transition-transform ease-in-out duration-500 object-cover"
            alt="project card-Image"
          />

          <div className="absolute inset-0 bg-black/30  opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300">
            
        </div>
  {/* 
  {text-[#202124]} */}
        </div>
        <div className="card-body w-full h-[200px] flex flex-col justify-center gap-5 p-5 text-[#E3E3E3] bg-[#020617]/70 backdrop-blur-md hover:-translate-y-2 hover:scale-[1.02]
transition-all duration-300 ">
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
