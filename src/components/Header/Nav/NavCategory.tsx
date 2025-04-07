'use client';
import { useState, useCallback, useRef } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import Link from 'next/link';
import { BiCategory } from 'react-icons/bi';

const categories = [
  {
    title: 'مد و پوشاک',
    url: '/',
    subcategories: [
      {
        title: 'مد و پوشاک',
        url: '/',
        subcategories: [
          { title: 'مد و پوشاک', url: '/' },
          { title: 'مد و پوشاک', url: '/' },
          { title: 'مد و پوشاک', url: '/' },
        ],
      },
    ],
  },
];

interface ICategoryLinkType {
  title: string;
  url: string;
  subcategories?: ICategoryLinkType[] | null;
}

export default function NavCategory() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const [anime_revers, setAnime_revers] = useState<string>('');

  const handleMouseEnter = useCallback(() => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setMenuOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAnime_revers('');
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
        className="flex cursor-pointer items-center py-2 gap-2"
      >
        <BiCategory size={24} />
        <span>دسته‌بندی کالا‌ها</span>
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute right-0 rounded-b-xl shadow-xl bg-card border-x border-b border-border w-52 z-10 transition-all duration-300 ${
          anime_revers != '' ? anime_revers.toString : ''
        } ${isMenuOpen ? 'visible animate-fade-down' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-2 relative">
          {categories.map((category, index) => (
            <li
              key={index}
              onMouseEnter={() => handleCategoryEnter(index)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link
                href={category.url}
                className="flex justify-between p-3 group hover:bg-bg_hover_low rounded-md text-gray-750 duration-300"
              >
                <div className="flex items-center">
                  <span>{category.title}</span>
                </div>
                <FaAngleLeft
                  size={16}
                  className="duration-500 -rotate-90 group-hover:rotate-0"
                />
              </Link>

              {openCategory === index && (
                <div className="absolute right-full top-0 bg-card w-[700px] animate-fade-left border border-t-0 border-border rounded-x-lg shadow-xl rounded-b-lg p-3 flex">
                  <div className="w-full grid grid-cols-3 gap-5">
                    {category.subcategories?.map((subcategory, idx) => (
                      <div key={idx} className="flex flex-col gap-5">
                        <Link href={subcategory?.url}>
                          <h4 className="text-base border-r-2 pr-2 border-red-500">
                            {subcategory?.title}
                          </h4>
                        </Link>
                        <ul className="space-y-3">
                          {subcategory.subcategories?.map((item, itemIdx) => (
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
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
