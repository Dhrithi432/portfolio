import React, { createContext, useState, useContext, useEffect } from 'react';

// Dark Mode Context
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // Initialize with dark mode as default, but check localStorage if available
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true; // Default to true (dark mode)
    }
    return true; // Default to dark mode for SSR
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newValue = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('darkMode', JSON.stringify(newValue));
      }
      return newValue;
    });
  };

  // Apply dark class to document root
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);
  
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeContext, DarkModeProvider };