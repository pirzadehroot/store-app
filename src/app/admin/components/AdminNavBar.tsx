'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import { HiOutlineBellAlert, HiOutlineUsers } from 'react-icons/hi2';
import { PiArticle } from 'react-icons/pi';
import { RiSettingsLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { TbBrandAppleNews } from 'react-icons/tb';

const items = [
  {
    icon: <AiOutlineDashboard size={22} />,
    title: 'داشبورد',
    url: '/admin/dashboard',
  },
  {
    icon: <RxDashboard size={22} />,
    title: 'دسته بندی ها',
    url: '/admin/categories',
  },
  {
    icon: <BsBoxSeam size={22} />,
    title: 'محصولات',
    url: '/admin/products',
  },
  {
    icon: <TbBrandAppleNews size={22} />,
    title: 'برند ها',
    url: '/admin/brands',
  },
  {
    icon: <PiArticle size={22} />,
    title: 'مقالات',
    url: '/admin/articles',
  },
  {
    icon: <HiOutlineUsers size={22} />,
    title: 'کاربران',
    url: '/admin/users',
  },
];

export default function AdminNavBar() {
  const pathName = usePathname();

  return (
    <div className="bg-bg_low rounded-md border border-border p-3 pb-3">
      <div className="py-3 px-1.5 rounded-lg border-border border-2 flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <RiSettingsLine size={23} />
          پنل مدیریت
        </h1>
        <span className="flex items-center gap-2 text-sm  ">
          <HiOutlineBellAlert size={23} />
          12 پیام جدید
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            className={`rounded-lg p-2  ${
              item.url === pathName ? 'text-blue-500' : ''
            }`}
            key={index}
          >
            <Link className="flex gap-3 justify-start" href={item.url}>
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
