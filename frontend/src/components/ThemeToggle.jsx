import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
      title={theme === 'light' ? 'Modo Escuro' : 'Modo Claro'}
    >
      <span className={`icon sun-icon ${theme === 'dark' ? 'hidden' : ''}`}>
        <Sun size={24} />
      </span>
      <span className={`icon moon-icon ${theme === 'light' ? 'hidden' : ''}`}>
        <Moon size={24} />
      </span>
    </button>
  );
};

export default ThemeToggle;
