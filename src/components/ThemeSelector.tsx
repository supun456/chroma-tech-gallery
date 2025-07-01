
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

const ThemeSelector: React.FC = () => {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="neon-button bg-transparent border-2 hover:bg-transparent"
        style={{ borderColor: 'var(--neon-primary)', color: 'var(--neon-primary)' }}
      >
        <span className="text-sm font-mono uppercase tracking-wider">
          {themes.find(t => t.name === theme)?.label}
        </span>
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-2 min-w-[150px] z-50"
          >
            {themes.map((themeOption) => (
              <button
                key={themeOption.name}
                onClick={() => {
                  setTheme(themeOption.name);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md transition-all duration-200 hover:bg-white/10 ${
                  theme === themeOption.name ? 'bg-white/20' : ''
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: themeOption.colors.primary }}
                  />
                  <span className="text-sm font-mono text-white">
                    {themeOption.label}
                  </span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
