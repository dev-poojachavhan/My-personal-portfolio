import React, { useEffect, useState } from 'react'
import { Navbar } from '../UI/Navbar'

export const Header = () => {
const [sticky, setSticky] = useState(false);
  console.log(window.scrollY)



    useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
  return (
    <>
      <div className={`layout-container
      h-20 w-full  bg-gray-900 text-white border-b border-gray-700 
       fixed top-0 left-0  z-50 
        transition-all duration-300
        ${sticky 
          ? "bg-gray-900/50 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"}
      `}
      >
        <Navbar/>
      </div>
    </>
  )
}
