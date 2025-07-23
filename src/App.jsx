import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Fotter from './components/Fotter'
import Contact from './components/Contact'
import About from './components/About'
import Resume from './components/Resume'
import Project from './components/Projects'
import { Toaster } from 'react-hot-toast'


function App() {
  const routes = createBrowserRouter ([
    {
     path:'/',
     element:<><Navbar/><Home/><Fotter/></>
    },
    {
     path:'/about',
     element:<><Navbar/><About/><Fotter/></>
    },
    {
      path:'/contact',
      element:<><Navbar/><Contact/><Fotter/></>
    },
    {
      path:'/resume',
      element:<><Navbar/><Resume/><Fotter/></>
    },
    {
      path:'/projects',
      element:<><Navbar/><Project/><Fotter/></>
    }
    
  ])

  return (
    <>
     <RouterProvider router={routes} />

     <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1a1a1a",
            color: "#00ffcc",
          },
          success: {
            icon: "✅",
          },
          error: {
            icon: "❌",
          },
        }}
      />
    </>
  )
}

export default App
