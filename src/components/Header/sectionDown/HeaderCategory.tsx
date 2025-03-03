"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { GrTechnology } from "react-icons/gr";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import image_src from "@/assets/images/headerCategory/mega-banner-1.png";
import CategoryIcon from "@/assets/images/headerIcons/Category-header.svg";

const categories = [
  {
    title: "مد و پوشاک",
    url: "/",
    icon: <GrTechnology size={20} className="ml-2" />,
    image: image_src,
    subcategories: [
      {
        title: "دسته‌بندی مد و پوشاک",
        items: [
          { title: "کفش", url: "/shoes" },
          { title: "پیراهن", url: "/shirt" },
          { title: "کت و شلوار", url: "/suit" },
        ],
      },
    ],
  },
  {
    title: "مد و پوشاک",
    url: "/",
    icon: <GrTechnology size={20} className="ml-2" />,
    image: image_src,
    subcategories: [
      {
        title: "دسته‌بندی مد و پوشاک",
        items: [
          { title: "کفش", url: "/shoes" },
          { title: "پیراهن", url: "/shirt" },
          { title: "کت و شلوار", url: "/suit" },
        ],
      },
    ],
  },
  {
    title: "مد و پوشاک",
    url: "/",
    icon: <GrTechnology size={20} className="ml-2" />,
    image: image_src,
    subcategories: [
      {
        title: "دسته‌بندی مد و پوشاک",
        items: [
          { title: "کفش", url: "/shoes" },
          { title: "پیراهن", url: "/shirt" },
          { title: "کت و شلوار", url: "/suit" },
        ],
      },
    ],
  },
  {
    title: "مد و پوشاک",
    url: "/",
    icon: <GrTechnology size={20} className="ml-2" />,
    image: image_src,
    subcategories: [
      {
        title: "دسته‌بندی مد و پوشاک",
        items: [
          { title: "کفش", url: "/shoes" },
          { title: "پیراهن", url: "/shirt" },
          { title: "کت و شلوار", url: "/suit" },
        ],
      },
    ],
  },
];

export default function HeaderCategory() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const [anime_revers, setAnime_revers] = useState<string>("");

  const handleMouseEnter = useCallback(() => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAnime_revers(
      "animate-fade-down animate-once animate-ease-in-out animate-reverse"
    );
    menuTimeout.current = setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  }, []);

  const handleCategoryEnter = useCallback((index: number) => {
    setOpenCategory(index);
  }, []);

  const handleCategoryLeave = useCallback(() => {
    setOpenCategory(null);
  }, []);

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex cursor-pointer items-center py-2.5 hover:text-gray-700  dark:hover:text-white transition-colors"
      >
        <Image
          className="text-gray-500 ml-2 dark:text-white"
          priority
          src={CategoryIcon}
          alt={"category-icon"}
          width={22}
          height={22}
        />
        <span className="text-gray-500 text-sm dark:text-gray-100">
          دسته‌بندی کالا‌ها
        </span>
      </div>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute right-0 rounded-b-xl text-sm shadow-xl bg-white border border-gray-200 dark:bg-gray-750 dark:border-gray-700 dark:text-gray-100 w-60 z-10 transition-all duration-300 ${
          anime_revers != "" ? anime_revers.toString : ""
        } ${
          isMenuOpen
            ? "visible animate-fade-down animate-once animate-ease-in-out"
            : "hidden"
        }`}
      >
        <ul className="space-y-1">
          {categories.map((category, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => handleCategoryEnter(index)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link
                href={category.url}
                className="flex items-center justify-between p-3 group hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-100  rounded-md text-gray-750  duration-300"
              >
                <div className="flex items-center">
                  {category.icon}
                  <span className="text-sm">{category.title}</span>
                </div>
                <FaAngleLeft
                  size={16}
                  className="text-gray-500 dark:text-gray-100 transform transition-transform duration-500 group-hover:-rotate-90"
                />
              </Link>

              {openCategory === index && (
                <div className="absolute right-full top-0 w-[700px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg p-3 flex animate-fade-left animate-once animate-ease-in-out">
                  <div className="ml-4 w-full grid grid-cols-3">
                    {category.subcategories.map((subcategory, idx) => (
                      <div key={idx}>
                        <h3 className="text-base text-gray-700 dark:text-gray-55 mb-2 mt-2 border-r-2 pr-2 border-red-500">
                          {subcategory.title}
                        </h3>
                        <ul className="space-y-2">
                          {subcategory.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.url}
                                className="block p-2 hover:bg-gray-100 rounded-md text-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={130}
                    height={80}
                    className="rounded-md"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
