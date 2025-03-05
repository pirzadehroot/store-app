"use client";
import { useEffect, useState } from "react";
import NavbarItems from "./NavbarItems";

export default function HeaderNav() {
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
      className={`relative bg-bg_low text-low border-b border-border max-lg:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] transition-transform duration-500 ${
        isNavVisible ? "translate-y-0" : "-translate-y-full -bottom-0.5"
      } `}
    >
      <NavbarItems />
    </section>
  );
}
