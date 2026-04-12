import React from 'react'
import { ProjectsCard } from '../UI/ProjectsCard'
import TodoImage from "../../assets/images/TodoImage.jpg"
import StockImage from "../../assets/images/stock1.jpg"
import PolicyImage from "../../assets/images/policy-image.jpg"

export const Projects = () => {

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


  return (
    <div className='w-full min-h-screen flex flex-col gap-10 justify-center items-center bg-[#1A3D64]'>

        <h1 className='text-3xl font-bold mb-18 text-white'>Projects</h1>

      <ul className=' flex justify-center items-center gap-5'>
        {
          projectList.map((currPro) => {
            return <ProjectsCard key={currPro.id} projectDetails={currPro } />
          })
        }
      </ul>

     
    </div>
  )
}
