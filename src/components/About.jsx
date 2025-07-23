import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 mb-4">
              About Me
            </h1>
            <p className="text-base leading-relaxed xl:w-2/3 lg:w-3/4 mx-auto text-gray-500s ">
              Hi Everyone, I am Siddhesh Bangar from Manchar(pune), India. I am
              currently graduated in Bachelor of Information Technology From
              Pillai HOC College of Arts, Science and Commerce Rasayani. I have
              completed my internship in SAP from Saniyo Special Steel Khopoli.
              I am a passionate learner and a tech enthusiast. I love to learn
              new things and explore new technologies.
            </p>
          </div>

          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5v-5h2.5v-2H13v-1a1 1 0 011-1h1V6h-1.5A3.5 3.5 0 0010 9.5v2H8v2h2v5h3z"></path>
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  1+ Years
                </h2>
                <p className="leading-relaxed">Experience in Making Projects</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M4 21v-2a4 4 0 013-3.87"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  6+ Projects
                </h2>
                <p className="leading-relaxed">Completed</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 10h2l1 2h13l1-2h2"></path>
                  <path d="M16 3l4 4-4 4"></path>
                  <path d="M10 3l-4 4 4 4"></path>
                </svg>
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  Full Stack
                </h2>
                <p className="leading-relaxed">Developer Role</p>
              </div>
            </div>
          </div>

          <section class=" text-gray-700 body-font">
            <div class="container px-5 py-20 mx-auto">
              <div class="text-center mb-10 ">
                <h1 class="text-3xl font-semibold text-gray-900 mb-4">
                  Apart from Coding
                </h1>
                <p class="text-base leading-relaxed mx-auto lg:w-2/3">
                  Apart from coding, here are a few activities that I love to
                  do!
                </p>
              </div>

              <div class="flex flex-wrap justify-center gap-6 ">
                <div class="w-60 border border-purple-300 rounded-xl shadow hover:shadow-md p-6 flex flex-col items-center bg-purple-50">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9131/9131588.png"
                    alt="Gaming"
                    class="w-16 h-16 mb-4"
                  />
                  <h2 class="text-lg font-medium text-gray-900">
                    Playing Games
                  </h2>
                </div>

                <div class="w-60 bg-purple-50 border border-purple-300 rounded-xl shadow hover:shadow-md p-6 flex flex-col items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
                    alt="Travelling"
                    class="w-16 h-16 mb-4"
                  />
                  <h2 class="text-lg font-medium text-gray-900">Travelling</h2>
                </div>
              </div>
            </div>
          </section>

          <section class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto ">
              <div class="flex flex-col text-center w-full mb-20 ">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  My Tech Stack
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  These are the technologies I work with to build fast,
                  scalable, and modern web applications.
                </p>
              </div>

              <div class="flex flex-wrap -m-4 justify-center ">
                <div class="lg:w-1/4 sm:w-1/2 p-4 ">
                  <div class=" rounded-xl  shadow hover:shadow-xl p-6 flex flex-col items-center transition bg-purple-50">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                      class="w-20 h-20"
                      alt="HTML5"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      HTML5
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                      class="w-20 h-20"
                      alt="CSS3"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      CSS3
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                      class="w-20 h-20"
                      alt="JavaScript"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      JavaScript
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://tailwindcss.com/_next/static/media/tailwindcss-logomark.70a4da1b.svg"
                      class="w-20 h-20"
                      alt="Tailwind CSS"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      Tailwind CSS
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                      class="w-20 h-20"
                      alt="React.js"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      React.js
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                      class="w-20 h-20 bg-white rounded-full p-2 shadow"
                      alt="Express.js"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      Express.js
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                      class="w-20 h-20 bg-white rounded-full p-2 shadow"
                      alt="Next.js"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      Next.js
                    </h2>
                  </div>
                </div>

                <div class="lg:w-1/4 sm:w-1/2 p-4">
                  <div class="bg-purple-50 rounded-xl shadow hover:shadow-xl p-6 flex flex-col items-center transition">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                      class="w-20 h-20"
                      alt="SQL"
                    />
                    <h2 class="text-lg font-semibold text-gray-900 mt-4">
                      SQL
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>

         <section class=" text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Tools I Use</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        These are the essential tools I use to build, deploy, and manage my projects efficiently.
      </p>
    </div>

    <div class="flex flex-wrap -m-4 justify-center">

    
      <div class="lg:w-1/4 sm:w-1/2 p-4">
        <div class="bg-purple-50 border border-purple-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" class="w-16 h-16" alt="GitHub" />
          <h2 class="text-lg font-semibold text-gray-900 mt-4">GitHub</h2>
        </div>
      </div>

     
      <div class="lg:w-1/4 sm:w-1/2 p-4">
        <div class="bg-purple-50 border border-purple-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" class="w-16 h-16" alt="LinkedIn" />
          <h2 class="text-lg font-semibold text-gray-900 mt-4">LinkedIn</h2>
        </div>
      </div>

     
      <div class="lg:w-1/4 sm:w-1/2 p-4">
        <div class="bg-purple-50 border border-purple-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="w-16 h-16" alt="VS Code" />
          <h2 class="text-lg font-semibold text-gray-900 mt-4">VS Code</h2>
        </div>
      </div>

     
      <div class="lg:w-1/4 sm:w-1/2 p-4">
        <div class="bg-purple-50 border border-purple-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition">
          <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" class="w-16 h-16" alt="Vercel" />
          <h2 class="text-lg font-semibold text-gray-900 mt-4">Vercel</h2>
        </div>
      </div>

    
      <div class="lg:w-1/4 sm:w-1/2 p-4">
        <div class="bg-purple-50 border border-purple-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" class="w-16 h-16" alt="ChatGPT" />
          <h2 class="text-lg font-semibold text-gray-900 mt-4">ChatGPT</h2>
        </div>
      </div>

    </div>
  </div>
</section>

        </div>
      </section>
    </div>
  );
};

export default About;
