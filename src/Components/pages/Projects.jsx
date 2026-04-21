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

// useEffect(() => {
//   const grid = document.querySelector(".grid-layer");

//   let ticking = false;
//    let windowSize = window.visualViewport

//   const handleMouseMove = (e) => {
//     if (!ticking) {
//       window.requestAnimationFrame(() => {
//         const { innerWidth, innerHeight } = window;

//         const x = (e.clientX / innerWidth - 0.5) * 6;
//         const y = (e.clientY / innerHeight - 0.5) * 6;

//         if (grid) {
//           grid.style.transform = `
//             perspective(600px)
//             rotateX(${65 - y}deg)
//             rotateY(${x}deg)
//           `;
//         }

//         ticking = false;
//       });

//       ticking = true;
//     }
//   };

//   window.addEventListener("mousemove", handleMouseMove);
//   return () => window.removeEventListener("mousemove", handleMouseMove);
// }, []);

  
  useEffect(() => {
  const grid = document.querySelector(".grid-layer");

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    targetX = (e.clientX / innerWidth - 0.5) * 4;
    targetY = (e.clientY / innerHeight - 0.5) * 4;
  };

  const animate = () => {
    currentX = lerp(currentX, targetX, 0.1);
    currentY = lerp(currentY, targetY, 0.1);

    if (grid) {
      grid.style.transform = `
        perspective(600px)
        rotateX(${65 - currentY}deg)
        rotateY(${currentX}deg)
      `;
    }

    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", handleMouseMove);
  animate();

  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);
  
  
  return (
    <div ref={revealRef} id='projects'
      className=' pt-20 pb-20 w-full min-h-screen flex flex-col  gap-5  items-center 
      projects-section'
      >

        {/*grid layer */}
  <div className="grid-layer "></div>  
      <div className='my-8 flex flex-col items-center text-center reveal'>
        <h1 className='md:text-4xl text-3xl font-bold p-2 bg-white gradient-text'>Projects</h1>
         <h3 className='text-white/80 my-2 text-sm '>Crafting ideas into interactive digital experiences</h3>
        </div>
      <ul className='p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal  z-20  '>
        {
          projectList.map((currPro) => {
            return <ProjectsCard key={currPro.id} projectDetails={currPro } />
          })
        }
      </ul>

     
    </div>
  )
}
