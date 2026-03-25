import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time Monitoring Dashboard',
      date: 'May 2025',
      image: '/dashboard.png',
      tech: ['Python', 'System Architecture'],
      features: [
        'Create a live dashboard showing system performance with interactive charts and graphs.',
        'Added real-time data updates showing CPU, Memory and network usage every few second.',
        'Built alert system that shows warnings when system resource go above safe limits.'
      ]
    },
    {
      title: 'Ecommerce-MegaBuy Website',
      date: 'December 2025',
      image: '/ecommerce.png',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
      features: [
        'Developed a full-stack E-commerce web application using React.js, Node.js, and Express.js.',
        'Designed a responsive UI with HTML, CSS, and React for improved user experience.',
        'Implemented user authentication and built RESTful APIs for products, users, and orders.',
        'Integrated shopping cart functionality and CRUD operations for product management.',
        'Managed database (MongoDB/MySQL) and ensured smooth navigation using React Router.'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border-b-2 border-purple-500 pb-2">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] overflow-hidden hover:border-purple-500 group transition-colors duration-300 flex flex-col">
              <div className="overflow-hidden relative h-48 sm:h-64 border-b border-[#2a2a2a]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <div className="p-8 flex-1 z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                </div>
                <p className="text-purple-400 text-sm font-medium mb-6">{project.date}</p>
                <ul className="space-y-3 mb-6">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-gray-400 text-sm flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 py-4 bg-[#111] border-t border-[#2a2a2a] flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium text-gray-500">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
