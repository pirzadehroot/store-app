"use client";

import { useEffect, useState } from "react";
import HeaderCategory from "./HeaderCategory";
import HeaderContactUs from "./HeaderContactUs";
import Nav from "./Nav";

export default function HeaderDownBar() {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <section
      className={`relative z-0 bg-gray-55 dark:bg-gray-800 dark:border-gray-750 border-b max-lg:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full -bottom-0.5"
      } `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            <HeaderCategory />
            <span className="border-l mx-4 h-1/3 dark:border-gray-400"></span>
            <Nav />
          </div>
          <HeaderContactUs />
        </div>
      </div>
    </section>
  );
}
