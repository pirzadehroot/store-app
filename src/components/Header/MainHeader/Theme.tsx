'use client';
import { useEffect, useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { CiBrightnessDown, CiDark } from 'react-icons/ci';
import { FiSun } from 'react-icons/fi';

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      return theme === 'dark' || (!theme && prefersDark);
    }
    return false; // برای SSR
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer hover:text-hover_low"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <CiBrightnessDown className="duration-500 hover:rotate-180" size={30} />
      ) : (
        <CiDark className="duration-500 hover:-rotate-12" size={30} />
      )}
    </div>
  );
}
