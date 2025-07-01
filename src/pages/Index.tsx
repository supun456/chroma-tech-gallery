
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden theme-transition">
        <ParticleBackground />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-white/10 mt-20">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-white/60 font-mono text-sm">
              © 2024 John Doe. Crafted with passion and cutting-edge tech.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
