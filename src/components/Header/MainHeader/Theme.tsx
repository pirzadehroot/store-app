'use client';
import { useEffect, useState } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { RiSunLine } from 'react-icons/ri';

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      return theme === 'dark' || (!theme && prefersDark);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <RiSunLine className="duration-500 hover:rotate-180" size={30} />
      ) : (
        <FaRegMoon className="duration-500 hover:-rotate-45" size={26} />
      )}
    </div>
  );
}
