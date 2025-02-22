"use client";
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="cursor-pointer dark:text-white text-gray-500 hover:text-gray-400 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <HiOutlineSun
          className="hover:text-gray-400 transform transition-transform duration-500 hover:rotate-180"
          size={30}
        />
      ) : (
        <HiOutlineMoon
          className="hover:text-gray-400 transform transition-transform duration-500 hover:-rotate-12"
          size={30}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
