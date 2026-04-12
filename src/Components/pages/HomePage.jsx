import React from 'react'
import { Hero } from './Hero'
import { About } from './About'
import { Skills } from './Skills'
import { Contact } from './Contact'
import { Projects } from './Projects'



export const HomePage = () => {
    return (
    //   {stacked layout for homepage}
      <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact/>
      </>
  )
}
