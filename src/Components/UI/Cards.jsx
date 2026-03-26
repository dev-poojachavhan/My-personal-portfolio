import React from 'react'

export const Cards = ({ techDetails,pourState }) => {
  
  const { techName, icon,color,id} = techDetails
 
  return (
   <li>    
      <div className='
                    shadow-sm shadow-black  rounded-md w-[150px] h-[180px] bg-white/5
                     backdrop-blur-2xl glass border border-white/30 flex flex-col items-center justify-around'
                    
   >
      
        <div className={`text-5xl text-slate-300 
                        card ${pourState ? "show" : "hide"}`}
                        style={{ transitionDelay: `${1.4+id * 0.5}s` }}
        >
           <span style={{ color:color }}>
                      {icon}
          </span>
        </div>
    
    <p className="text-[#df91d5] text-2xl font-semibold mb-3">
     {techName}
    </p>

    

        
      

     
      </div>
 </li>      )
}
