import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(current =>
      current === 'light' ? 'dark' : 'light'
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}