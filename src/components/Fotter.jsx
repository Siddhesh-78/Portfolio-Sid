import React from 'react'
import { Link } from 'react-router-dom'

const Fotter = () => {
  return (
    
     <footer className="text-gray-600 body-font w-full bg-purple-100">
  <div className="w-full flex items-center sm:flex-row flex-col px-4 py-4">
    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Siddhesh</span>
    </Link>

    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-0 sm:mt-0 mt-4">
      © {new Date().getFullYear()} Siddhesh —
      <Link to="https://github.com/siddhesh-78" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">
        @mygithub
      </Link>
    </p>

    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      
      <Link to="https://www.linkedin.com/in/siddhesh-bangar-510a4a325/" className="ml-3 text-gray-500 hover:text-black">
 
        <span className='hover:text-indigo-600 hover:text-[17px] transition-all transform hover:scale-105'>Linkedin</span>
      </Link>

    

    
    </span>

     <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      
      <Link to="https://siddhesh-portfolio-kohl.vercel.app/" className="ml-3 text-gray-500 hover:text-black">
        <span className='hover:text-indigo-600 hover:text-[17px] transition-all transform hover:scale-105'>For-More-Details!</span>
      </Link>

    

    
    </span>
  </div>
</footer>

    
  )
}

export default Fotter
