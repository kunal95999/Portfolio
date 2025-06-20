import React from 'react';
import { Code, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Constantly learning new technologies and implementing cutting-edge solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to deliver exceptional results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in modern web technologies. 
              My journey in software development has equipped me with a comprehensive understanding 
              of both frontend and backend development, allowing me to create seamless, user-centric applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With experience at <strong className="text-white">Tech Mahindra</strong>, I've had the opportunity 
              to work on enterprise-level projects, collaborating with diverse teams and delivering solutions 
              that drive business value. I'm particularly passionate about Java ecosystem, Spring Boot, 
              and modern React applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;