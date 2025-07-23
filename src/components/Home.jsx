import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-[calc(100vh-80px)] w-full flex justify-center align-middle">
        <div className="w-[100%] h-[90%] flex">
          {/* Left Section */}
          <div className="w-1/2 h-full flex justify-center flex-col  px-10">
            <h1 className="text-5xl font-bold text-purple-900 mb-10">
              Hi there! 👋
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              I’m <span className="text-purple-600">Siddhesh Bangar</span>
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              A passionate{" "}
              <span className="text-purple-900 font-semibold">
                Full Stack Web Developer
              </span>{" "}
              crafting responsive and interactive web applications.
            </p>
          </div>

          {/* Right Section */}
          <div className="w-1/2 h-full flex items-center justify-center">
            <img className="w-[70%]" src="images/download.png" alt="Profile" />
          </div>
        </div>
      </div>

      <div className="w-full px-10 mt-5">
        <div className="bg-purple-50 rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold mb-4">
            Let Me <span className="text-purple-500">Introduce</span> Myself
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            I fell in love with programming and I’ve learned quite Link lot
            along the way... 🤷‍♂️
          </p>

          <p className="text-lg text-gray-700 mb-4">
            I am fluent in classics like{" "}
            <span className="font-semibold text-purple-600">JavaScript</span>,{" "}
            <span className="font-semibold text-purple-600">React</span>, and{" "}
            <span className="font-semibold text-purple-600">Express</span>.
          </p>

          <p className="text-lg text-gray-700">
            My areas of interest include building modern{" "}
            <span className="font-semibold text-purple-600">
              Web Technologies
            </span>
            , exploring{" "}
            <span className="font-semibold text-purple-600">
              Prompt Engineering
            </span>
            , and diving into the world of{" "}
            <span className="font-semibold text-purple-600">Generative AI</span>
            .
          </p>
        </div>
      </div>

      <div className="w-full px-10 mt-20">
        <div className="bg-purple-50  rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-600">
            FIND ME ON
          </h2>
          <p className="text-lg  mb-6">
            Feel free to{" "}
            <span className="font-semibold text-purple-500">connect</span> with
            me
          </p>

          <div className="flex justify-center gap-6">
            <Link className="text-indigo-600 font-medium hover:text-indigo-800 transform hover:scale-105 transition-all" to="https://www.linkedin.com/in/siddhesh-bangar-510a4a325/">LinkedIn</Link>
            <Link className="text-indigo-600 font-medium hover:text-indigo-800 transform hover:scale-105 transition-all" to="https://github.com/siddhesh-78">GitHub</Link>
          </div>
        </div>
      </div>

     <section class="text-gray-600 body-font w-full">
  <div class="w-full px-4 py-20 mx-auto max-w-7xl">
    <div class="text-center mb-12">
      <h1 class="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">Skills</h1>
      <p class="text-base leading-relaxed text-gray-500 max-w-2xl mx-auto">
        I specialize in full-stack web development with modern technologies that help build scalable, responsive, and user-friendly applications.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">HTML5</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">CSS</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">JavaScript</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">React.js</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">TailwindCSS</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">Express.js</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">SQL</span>
      </div>

      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">Next.js</span>
      </div>
      <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">Responsive Design</span>
      </div>
        <div class="bg-gray-100 rounded flex items-center p-4">
        <svg class="text-indigo-500 w-6 h-6 mr-3" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M22 4L12 14.01l-3-3"></path><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        </svg>
        <span class="font-medium text-gray-800">Prompt Engineering</span>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
