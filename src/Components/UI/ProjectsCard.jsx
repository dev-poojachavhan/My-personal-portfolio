import React from "react";


export const ProjectsCard = ({ projectDetails }) => {
  
  const { Title, summary, image} = projectDetails;

  return (
    <li
      className="card w-74 rounded-2xl h-[400px] overflow-hidden group border  bg-[#E6F4FA] 
      shadow-black-lg hover:shadow-xl transition-shadow duration-300  "
    >
      <div className="w-full h-[200px] overflow-hidden relative">
        <img
          src={image}
          className="card-img-top w-full h-full  group-hover:scale-110 transition-transform ease-in-out duration-500 object-cover"
          alt="project card-Image"
        />

        <div className="absolute inset-0 bg-black/30  opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300">
          
       </div>


      </div>
      <div className="card-body flex flex-col justify-center gap-2 p-4  text-[#202124]">
        <h5 className="card-title font-semibold">{Title}</h5>
        <p className="card-text">
         {summary}
        </p>
        <div className=" flex justify-between ">
          <button className="w-24 h-8 text-center rounded-md p-1 bg-[#005173]
          hover:bg-[#0051738a] text-white transition-hover ease-in-out duration-200 hover:text-[#005173] ">
            Live
          </button>
          <button className="w-24 h-8 text-center rounded-md  p-1  bg-[#005173] 
          hover:bg-[#0051738a] text-white transition-all ease-in-out duration-200 hover:text-[#005173] ">
            view code
          </button>
        </div>
      </div>
    </li>
  );
};
