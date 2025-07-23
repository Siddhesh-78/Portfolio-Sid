import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap p-4 px-8 flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-semibold text-indigo-700">Siddhesh</span>
        </Link>

        {/* Navigation Links */}
        <nav className=" flex flex-wrap items-center gap-6 text-base text-gray-700 mt-4 md:mt-0">
          <Link to="/" className="hover:text-indigo-600 transition-all  hover:shadow-xl transform hover:scale-105 ">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition-all  hover:shadow-xl transform hover:scale-105">About</Link>
          <Link to="/resume" className="hover:text-indigo-600 transition-all  hover:shadow-xl transform hover:scale-105">Resume</Link>
          <Link to="/projects" className="hover:text-indigo-600 transition-all  hover:shadow-xl transform hover:scale-105">Projects</Link>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="inline-flex items-center bg-indigo-100 text-indigo-700 py-2 px-4 rounded hover:bg-indigo-200 text-sm font-medium transition mt-4 md:mt-0"
        >
          Contact
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
