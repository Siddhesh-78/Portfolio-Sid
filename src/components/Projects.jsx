import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'Expense Tracker',
      description: 'An app to monitor expenses, set budget goals, and track spending patterns.',
      tech: 'HTML, CSS, JavaScript, PHP, SQL',
      date: 'April 2025 – May 2025',
    },
    {
      title: 'Job Portal',
      description:
        'A full-featured job portal with user registration, job listings, application management, and admin dashboard.',
      tech: 'React.js, Express.js, SQL',
      date: 'December 2024 – December 2024',
    },
    {
      title: 'QuickFix Home Services',
      description: 'A booking platform for electricians, plumbers, and home services with real-time tracking.',
      tech: 'React, Express.js, SQL',
      date: '2025',
    },
    {
        title:'Attandance Management System',
        description:'An app to monitor student attendance, and track attendance patterns (Hackathon project).',
        tech:'PHP, SQL',
        date:'2024'
    }
  ];

  return (
    <section className="bg-purple-50 text-gray-700 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-base text-gray-600">
            Here are some of the projects I’ve built to sharpen my skills and solve real-world problems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-purple-300 shadow-lg rounded-xl p-6 max-w-sm w-full hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{project.date}</p>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              <span className="inline-block text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                {project.tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
