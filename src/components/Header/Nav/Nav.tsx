'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuHouse } from 'react-icons/lu';
import { FiShoppingBag } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import { MdInsertChartOutlined } from 'react-icons/md';
import { IoPeopleOutline } from 'react-icons/io5';
import { TbPhoneCall } from 'react-icons/tb';

export default function Nav() {
  const pathName = usePathname();

  const navItems = [
    { icon: <LuHouse size={20} />, title: 'صفحه اصلی', url: '/' },
    { icon: <FiShoppingBag size={20} />, title: 'فروشگاه', url: '/shop' },
    { icon: <HiOutlineDocumentText size={20} />, title: 'وبلاگ', url: '/blog' },
    {
      icon: <IoPeopleOutline size={20} />,
      title: 'درباره ما',
      url: '/about-us',
    },
    {
      icon: <TbPhoneCall size={20} />,
      title: 'تماس با ما',
      url: '/contact-us',
    },
  ];

  return (
    <nav>
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.url} className="group relative">
            <Link
              href={item.url}
              className={`flex gap-1 items-center py-1 transition-colors duration-300 ${
                pathName === item.url
                  ? 'text-red-500'
                  : 'text-gray-500 hover:text-red-500 dark:text-gray-100 dark:hover:text-red-500'
              }`}
            >
              {item.icon}
              {item.title}
            </Link>
            <div
              className={`absolute left-0 -bottom-1.5 h-0.5 bg-red-500 transition-transform duration-300 w-full ${
                pathName === item.url
                  ? 'scale-x-100'
                  : 'scale-x-0 group-hover:scale-x-100'
              }`}
            ></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
