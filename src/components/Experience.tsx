import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Mahindra',
      position: 'Software Developer',
      duration: '2022 - Present',
      location: 'India',
      description: [
        'Developed and maintained enterprise-level applications using Java and Spring Boot framework',
        'Collaborated with cross-functional teams to design and implement scalable microservices architecture',
        'Built responsive web applications using React.js and modern frontend technologies',
        'Participated in code reviews, testing, and deployment processes following agile methodologies',
        'Optimized application performance and implemented best practices for security and maintainability'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'Microservices', 'REST APIs']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Building size={18} />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 mt-4 md:mt-0 md:text-right">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;