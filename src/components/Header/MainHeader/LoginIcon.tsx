'use client';
import Link from 'next/link';
import { RiUser3Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';
import { FiHeart } from 'react-icons/fi';
import { IoExitOutline, IoWalletOutline } from 'react-icons/io5';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { useAuthStore } from '@/store/useAuthStore';
import { useState } from 'react';

export default function LoginIcon() {
  const user = useAuthStore((state) => state.user);
  return (
    <div className="relative group">
      {user ? (
        <button className="flex items-center gap-2">
          <RiUser3Line size={30} />
          <ul className="absolute top-11 left-3 w-36 text-sm p-3 bg-bg_low rounded-lg border space-y-3 invisible group-hover:visible transition-all duration-300 z-50">
            {user?.isAdmin && (
              <li>
                <Link
                  className="flex gap-2 hover:bg-red-500 rounded-lg p-1 py-1.5 items-center hover:text-white transition-colors"
                  href="/admin"
                >
                  <MdOutlineAdminPanelSettings size={26} />
                  ادمین
                </Link>
              </li>
            )}
            <li>
              <Link
                className="flex gap-2 hover:bg-red-500 rounded-lg p-1 py-1.5 items-center hover:text-white transition-colors"
                href="/profile"
              >
                <VscAccount size={23} />
                داشبورد
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 hover:bg-red-500 rounded-lg p-1 py-1.5 items-center hover:text-white transition-colors"
                href="/profile/favorites"
              >
                <IoWalletOutline size={23} />
                کیف پول
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 hover:bg-red-500 rounded-lg p-1 py-1.5 items-center hover:text-white transition-colors"
                href="/profile/favorites"
              >
                <FiHeart size={23} />
                علاقه مندی
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 hover:bg-red-500 rounded-lg p-1 py-1.5 items-center hover:text-white transition-colors"
                href="/logout"
              >
                <IoExitOutline size={23} />
                خروج
              </Link>
            </li>
          </ul>
        </button>
      ) : (
        <Link href={'/login'} className="flex items-center gap-2">
          <RiUser3Line size={30} />
          <span>ورود / عضویت </span>
        </Link>
      )}
    </div>
  );
}
