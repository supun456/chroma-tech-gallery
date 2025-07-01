
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  
  const fullText = "I turn code into products.";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText]);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-sm font-mono text-white/60 mb-4 uppercase tracking-widest">
            Welcome to the matrix
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <div className="text-xl md:text-2xl font-mono mb-8 h-8">
            <span className="glow-text">
              {displayText}
              <span className="animate-blink border-r-2 border-current ml-1"></span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Full-stack developer crafting digital experiences with cutting-edge technologies. 
            Specializing in React, Node.js, and cloud architectures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <Button className="neon-button px-8 py-3 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full border-2 border-transparent transition-all duration-300 hover:scale-110"
                style={{ borderColor: 'var(--neon-primary)' }}
                whileHover={{ 
                  boxShadow: '0 0 20px var(--neon-primary)',
                  backgroundColor: 'rgba(0, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6" style={{ color: 'var(--neon-primary)' }} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="animate-bounce"
        >
          <div className="w-6 h-10 border-2 rounded-full mx-auto relative"
               style={{ borderColor: 'var(--neon-primary)' }}>
            <div className="w-1 h-3 rounded-full mx-auto mt-2 animate-pulse"
                 style={{ backgroundColor: 'var(--neon-primary)' }}></div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ 
              backgroundColor: 'var(--neon-primary)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
