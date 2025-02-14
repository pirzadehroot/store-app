"use client";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="hover:cursor-pointer dark:text-white  text-gray-500 hover:text-gray-400 transition-colors"
    >
      {isDarkMode ? (
        <MdOutlineLightMode
          className=" hover:text-gray-400 transform transition-transform duration-500 hover:rotate-180"
          size={30}
        />
      ) : (
        <FaRegMoon
          className=" hover:text-gray-400 transform transition-transform duration-500 hover:-rotate-45"
          size={30}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
