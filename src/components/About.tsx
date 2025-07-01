
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { name: 'Data Analysis', level: 95 },
    { name: 'Forecasting Models', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'MS Office', level: 90 },
    { name: 'Data Governance', level: 80 },
    { name: 'Backend Development', level: 85 }
  ];

  const timeline = [
    {
      year: '2024-2025',
      title: 'Associate Software Engineer',
      company: 'Velou, Engineering Center',
      description: 'Transitioned into software engineering role, contributing to backend development projects. Leveraged data expertise to build more efficient and scalable systems.'
    },
    {
      year: '2023-2024',
      title: 'Lead - Data Excellence Team',
      company: 'Velou, Engineering Center',
      description: 'Led the Data Excellence team, overseeing data strategy and governance initiatives. Streamlined data workflows and ensured data integrity across all business functions.'
    },
    {
      year: '2022-2023',
      title: 'Senior Data Excellence Analyst',
      company: 'Velou, Engineering Center',
      description: 'Trained cross-functional teams on data best practices. Championed data literacy programs and created forecasting models that improved prediction accuracy by 35%.'
    },
    {
      year: '2021-2022',
      title: 'Data Excellence Analyst',
      company: 'Velou, Engineering Center',
      description: 'Transformed complex data into actionable insights, supporting faster decisions. Utilized advanced analytics tools to improve data interpretation and reporting quality.'
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
            Results-driven data and software professional with over 4 years of experience at Velou, 
            progressing from Data Excellence Analyst to Associate Software Engineer. Skilled in data analytics, 
            team leadership, and backend development, with a proven ability to transform complex data into 
            actionable strategies.
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
            <h3 className="text-2xl font-bold mb-8 glow-text">Career Journey</h3>
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
