import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/kunal95999', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/kunal-singh-1037761b7', 
      label: 'LinkedIn' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/yourusername', 
      label: 'Twitter' 
    },
    { 
      icon: Mail, 
      href: 'mailto:kunalsing95999@example.com', 
      label: 'Email' 
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-gray-400 leading-relaxed">
              Passionate Full Stack Developer creating digital experiences with modern technologies. 
              Always excited to take on new challenges and build amazing things.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 text-gray-400 hover:text-white rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <strong className="text-white">Email:</strong>{' '}
                <a 
                  href="mailto:your.email@example.com"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  your.email@example.com
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Phone:</strong>{' '}
                <a 
                  href="tel:+911234567890"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  +91 12345 67890
                </a>
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Location:</strong> India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;