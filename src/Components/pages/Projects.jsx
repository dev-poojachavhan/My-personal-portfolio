import React, { useEffect } from 'react'
import { ProjectsCard } from '../UI/ProjectsCard'
import TodoImage from "../../assets/images/TodoImage.jpg"
import StockImage from "../../assets/images/stock1.jpg"
import PolicyImage from "../../assets/images/policy-image.jpg"
import { useReveal } from '../hooks/useReveal'

export const Projects = () => {

  const revealRef = useReveal()

  const projectList = [
    {
      id: 1,
      Title: 'Todo App',
      summary: "Some quick example text to build on the card title and make up the bulk of the card's   content.",
      image: TodoImage

      
    },
    {
      id: 2,
      Title: 'Stock WatchTime',
      summary: "Some quick example text to build on the card title and make up the bulk of the card's   content.",
      image: StockImage
    },
    {
      id: 3,
      Title: 'Health Insurance planner',
      summary: "Some quick example text to build on the card title and make up the bulk of the card's   content.",
      image:PolicyImage
      
    }
  ]

useEffect(() => {
  const grid = document.querySelector(".grid-layer");

  let ticking = false;

  const handleMouseMove = (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;

        const x = (e.clientX / innerWidth - 0.5) * 6;
        const y = (e.clientY / innerHeight - 0.5) * 6;

        if (grid) {
          grid.style.transform = `
            perspective(600px)
            rotateX(${65 - y}deg)
            rotateY(${x}deg)
          `;
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  return (
    <div ref={revealRef}
      className=' pt-20 w-full min-h-screen flex flex-col gap-15  items-center 
    projects-section    '>

        {/*grid layer */}
  <div className="grid-layer"></div>  
      <div className='my-10  text-center reveal'>
        <h1 className='md:text-4xl text-3xl font-bold  bg-white gradient-text'>Projects</h1>
         <h3 className='text-white/80 my-6 text-sm '>Crafting ideas into interactive digital experiences</h3>
        </div>
      <ul className=' flex flex-col md:flex-row justify-center items-center gap-8 reveal'>
        {
          projectList.map((currPro) => {
            return <ProjectsCard key={currPro.id} projectDetails={currPro } />
          })
        }
      </ul>

     
    </div>
  )
}
