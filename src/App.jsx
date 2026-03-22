  import React from 'react'

  import { createBrowserRouter, RouterProvider } from 'react-router'
  import { Home } from './Components/pages/Home'
  import { About } from './Components/pages/About'
  import { Skills } from './Components/pages/skills'
  import { Projects } from './Components/pages/projects'
  import { Contact } from './Components/pages/Contact'
  import { Layout } from './Components/Layout/Layout'



  const App = () => {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,
        children: [
          
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "contact",
            element: <Contact />,
          }
        ]
      }
    ]);


    return <RouterProvider router={router} />
  }

  export default App