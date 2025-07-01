
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'AWS/Cloud', level: 75 },
    { name: 'MongoDB', level: 85 }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      description: 'Leading development of scalable web applications'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      description: 'Built customer-facing applications from ground up'
    },
    {
      year: '2020',
      title: 'Frontend Developer',  
      company: 'WebAgency',
      description: 'Created responsive websites and web applications'
    },
    {
      year: '2019',
      title: 'Computer Science Graduate',
      company: 'University',
      description: 'Bachelor\'s degree in Computer Science'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications
            and leading development teams. I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8 glow-text">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-mono">{skill.name}</span>
                    <span className="text-white/60">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: 'var(--neon-primary)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-8 glow-text">Journey</h3>
            <div className="relative">
              <div 
                className="absolute left-4 top-0 bottom-0 w-0.5"
                style={{ backgroundColor: 'var(--neon-primary)' }}
              />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 pb-8 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="absolute left-2 w-4 h-4 rounded-full border-2"
                    style={{ 
                      backgroundColor: 'var(--neon-primary)',
                      borderColor: 'var(--neon-primary)',
                      boxShadow: '0 0 10px var(--neon-primary)'
                    }}
                  />
                  
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="text-sm font-mono mb-1" style={{ color: 'var(--neon-primary)' }}>
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    <div className="text-white/60 text-sm mb-2">
                      {item.company}
                    </div>
                    <p className="text-white/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
