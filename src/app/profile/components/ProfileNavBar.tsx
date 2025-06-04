'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CgShoppingBag } from 'react-icons/cg';
import { BsBoxSeam } from 'react-icons/bs';
import { TbBrandAppleNews, TbMessages } from 'react-icons/tb';
import { VscAccount } from 'react-icons/vsc';
import { FiHeart } from 'react-icons/fi';
import { IoExitOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';

const items = [
  {
    icon: <RxDashboard size={22} />,
    title: 'داشبورد',
    url: '/profile',
  },
  {
    icon: <CgShoppingBag size={22} />,
    title: 'سفارش ها',
    url: '/profile/orders',
  },
  {
    icon: <FiHeart size={22} />,
    title: 'لیست علاقه مندی',
    url: '/profile/favorites',
  },
  {
    icon: <TbMessages size={22} />,
    title: 'دیدگاه‌ها و پرسش‌ها',
    url: '/profile/comments',
  },
  {
    icon: <VscAccount size={22} />,
    title: 'حساب کاربری',
    url: '/profile/account',
  },
  {
    icon: <IoExitOutline size={22} />,
    title: 'خروج',
    url: '/logout',
  },
];

export default function ProfileNavBar(admin: any) {
  const pathName = usePathname();

  return (
    <div className=" p-3 pb-3 bg-bg_low rounded-md">
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            className={`rounded-lg p-5  ${
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
