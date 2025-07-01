
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'cyberpunk' | 'matrix' | 'solarized' | 'quantum' | 'nebula' | 'aurora';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: { name: Theme; label: string; colors: { primary: string; secondary: string; accent: string; tertiary?: string; quaternary?: string } }[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = [
  {
    name: 'cyberpunk' as Theme,
    label: 'Cyberpunk',
    colors: { primary: '#00FFFF', secondary: '#7f5af0', accent: '#ff00ff' }
  },
  {
    name: 'matrix' as Theme,
    label: 'Matrix',
    colors: { primary: '#00ff00', secondary: '#003300', accent: '#33ff33' }
  },
  {
    name: 'solarized' as Theme,
    label: 'Solarized',
    colors: { primary: '#cb4b16', secondary: '#268bd2', accent: '#b58900' }
  },
  {
    name: 'quantum' as Theme,
    label: 'Quantum',
    colors: { primary: '#ff66c4', secondary: '#22d3ee', accent: '#a855f7' }
  },
  {
    name: 'nebula' as Theme,
    label: 'Nebula',
    colors: { 
      primary: '#ff6b6b', 
      secondary: '#4ecdc4', 
      accent: '#45b7d1',
      tertiary: '#96ceb4',
      quaternary: '#ffeaa7'
    }
  },
  {
    name: 'aurora' as Theme,
    label: 'Aurora',
    colors: {
      primary: '#4F46E5',
      secondary: '#7C3AED', 
      accent: '#EC4899',
      tertiary: '#3B82F6',
      quaternary: '#8B5CF6'
    }
  }
];

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('cyberpunk');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
