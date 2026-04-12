  import React from 'react'

  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  
  import { About } from './Components/pages/About'
  import { Skills } from './Components/pages/Skills'
  
  import { Contact } from './Components/pages/Contact'
  import { Layout } from './Components/Layout/Layout'
  import { HomePage } from './Components/pages/HomePage'
    import { Projects } from './Components/pages/Projects'



  const App = () => {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          
          {
           index: true,
            element: <HomePage/>,
          },
          {
            path: "about",
            element: <About/>,
          },
          {
            path: "skills",
            element: <Skills/>,
          },
          {
            path: "projects",
            element: <Projects/>,
          },
          {
            path: "contact",
            element: <Contact/>,
          }
        ]
      }
    ]);


    return <RouterProvider router={router} />
  }

  export default App