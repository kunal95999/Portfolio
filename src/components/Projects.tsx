import React from 'react';
import { ExternalLink, Github, Database, Server, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Spring Boot backend and React frontend. Features include user authentication, product catalog, shopping cart, order management, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Stripe API', 'Docker'],
      features: [
        'RESTful API design with Spring Boot',
        'Secure authentication and authorization',
        'Real-time inventory management',
        'Payment gateway integration',
        'Responsive design with modern UI'
      ],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://your-ecommerce-demo.netlify.app'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates. Built using Spring Boot microservices architecture with React frontend and WebSocket integration.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'WebSocket', 'React.js', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Real-time collaboration features',
        'Microservices architecture',
        'Advanced filtering and search',
        'Role-based access control',
        'Performance monitoring and analytics'
      ],
      github: 'https://github.com/yourusername/task-management',
      demo: 'https://your-task-demo.netlify.app'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'A comprehensive weather analytics dashboard that aggregates data from multiple APIs and provides insights through interactive charts and visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'React.js', 'Chart.js', 'External APIs', 'Scheduler', 'H2 Database'],
      features: [
        'Multiple weather API integrations',
        'Interactive data visualizations',
        'Scheduled data collection',
        'Historical trend analysis',
        'Responsive dashboard design'
      ],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://your-weather-demo.netlify.app'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 overflow-hidden ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Server size={18} className="mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Database size={18} className="mr-2" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200"
                    >
                      <Globe size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;