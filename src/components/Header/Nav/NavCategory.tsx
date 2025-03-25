"use client";
import { useState, useCallback, useRef } from "react";
import { StaticImageData } from "next/image";
import { GrTechnology } from "react-icons/gr";
import { FaAngleLeft } from "react-icons/fa";
import Link from "next/link";
import image_src from "@/assets/images/headerCategory/mega-banner-1.png";
import { BiSolidCategory } from "react-icons/bi";

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
      {
        title: "دسته‌بندی مد و پوشاک",
        items: [
          { title: "کفش", url: "/shoes" },
          { title: "پیراهن", url: "/shirt" },
          { title: "کت و شلوار", url: "/suit" },
        ],
      },
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

interface ICategoryLinkType {
  title: string;
  url: string;
  icon: React.ReactNode;
  image: StaticImageData;
  subcategories: ISubCategoryLinkType[];
}

interface ISubCategoryLinkType {
  title: string;
  items: { title: string; url: string }[];
}

export default function NavCategory() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const [anime_revers, setAnime_revers] = useState<string>("");

  const handleMouseEnter = useCallback(() => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAnime_revers("");
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
      {CategoryIcon()}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute right-0 rounded-b-xl shadow-xl bg-card border-x border-b border-border w-52 z-10 transition-all duration-300 ${
          anime_revers != "" ? anime_revers.toString : ""
        } ${isMenuOpen ? "visible animate-fade-down" : "hidden"}`}
      >
        <ul className="flex flex-col gap-2 relative">
          {categories.map((category, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoryEnter(index)}
              onMouseLeave={handleCategoryLeave}
            >
              {CategoryLink(category)}

              {openCategory === index && SubCategoryLink(category)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  function SubCategoryLink(category: ICategoryLinkType) {
    return (
      <div className="absolute right-full top-0 bg-card w-[700px] animate-fade-left border border-t-0 border-border rounded-x-lg shadow-xl rounded-b-lg p-3 flex">
        <div className="w-full grid grid-cols-3 gap-5">
          {category.subcategories.map((subcategory, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              <h4 className="text-base border-r-2 pr-2 border-red-500">
                {subcategory.title}
              </h4>
              <ul className="space-y-3">
                {subcategory.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <Link
                      href={item?.url}
                      className="block p-1 hover:bg-bg_hover_low rounded-md"
                    >
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function CategoryLink({ title, url, icon }: ICategoryLinkType) {
    return (
      <Link
        href={url}
        className="flex justify-between p-3 group hover:bg-bg_hover_low rounded-md text-gray-750 duration-300"
      >
        <div className="flex items-center">
          {icon}
          <span>{title}</span>
        </div>
        <FaAngleLeft
          size={16}
          className="duration-500 -rotate-90 group-hover:rotate-0"
        />
      </Link>
    );
  }

  function CategoryIcon() {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex cursor-pointer items-center py-2 gap-2"
      >
        <BiSolidCategory size={24} />
        <span>دسته‌بندی کالا‌ها</span>
      </div>
    );
  }
}
