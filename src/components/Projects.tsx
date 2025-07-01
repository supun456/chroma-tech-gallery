
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'AI Chatbot Assistant',
      description: 'Intelligent chatbot using OpenAI API with custom training data',
      image: '/placeholder.svg',
      tags: ['Python', 'AI', 'FastAPI'],
      category: 'AI',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      description: 'Live data visualization dashboard with WebSocket connections',
      image: '/placeholder.svg',
      tags: ['React', 'D3.js', 'WebSocket'],
      category: 'Frontend',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description: 'Decentralized voting application built on Ethereum',
      image: '/placeholder.svg',
      tags: ['Solidity', 'Web3', 'React'],
      category: 'Blockchain',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with social features',
      image: '/placeholder.svg',
      tags: ['React Native', 'Firebase'],
      category: 'Mobile',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Cloud Infrastructure',
      description: 'Scalable microservices architecture deployed on AWS',
      image: '/placeholder.svg',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      category: 'DevOps',
      github: '#',
      demo: '#'
    }
  ];

  const filters = ['All', 'Full Stack', 'Frontend', 'AI', 'Blockchain', 'Mobile', 'DevOps'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my recent work across various technologies and domains
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-mono text-sm uppercase tracking-wide transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-opacity-20 glow-border'
                  : 'border border-white/20 hover:border-white/40'
              }`}
              style={{
                backgroundColor: selectedFilter === filter ? 'var(--neon-primary)' : 'transparent',
                color: selectedFilter === filter ? 'white' : 'var(--neon-primary)'
              }}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-white/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-white/10 border border-white/20"
                        style={{ color: 'var(--neon-primary)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-white/20 hover:border-white/40 text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 neon-button"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
