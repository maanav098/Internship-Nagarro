import React from 'react';
import { useDarkMode } from './darkmodecontext';
import './dark.css'
const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="bat">
      <span>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default DarkModeToggle;
