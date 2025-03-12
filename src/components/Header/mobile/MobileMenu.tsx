'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { PiUsersThreeLight } from 'react-icons/pi';
import Theme from '../MainHeader/Theme';
import Logo from '../MainHeader/Logo';
import { HiMenuAlt3 } from 'react-icons/hi';
import { LuSearch } from 'react-icons/lu';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10">
      <button onClick={() => setIsOpen(!isOpen)} className="pt-2">
        <HiMenuAlt3 size={37} />
      </button>

      {/* left menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-bg border-l border-border duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } max-sm:w-full`}
      >
        <div className="px-5 flex flex-row-reverse items-center gap-3 justify-between bg-bg_low border-b border-border">
          <CloseMenu />
          <Logo />
          <Theme />
        </div>
        <div className="p-3">
          <SearchBoxMobile />
        </div>
        {mune()}
      </div>
    </div>
  );

  function mune() {
    return (
      <ul className="px-3 grid gap-7 ">
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
        <li className="">
          <Link
            href={''}
            className={`flex gap-2 items-center hover:text-red-500 transition-colors`}
          >
            <PiUsersThreeLight size={25} />
            صفحه اصلی
          </Link>
        </li>
      </ul>
    );
  }

  function CloseMenu() {
    return (
      <button onClick={() => setIsOpen(false)}>
        <IoIosCloseCircleOutline size={33} />
      </button>
    );
  }
} 

export function SearchBoxMobile() {
  return (
    <form className="p-2 border rounded-xl flex bg-bg_low border-border items-center justify-between">
      <input
        type="text"
        placeholder="جستجو ..."
        className="outline-none bg-transparent"
      />
      <LuSearch size={25} className="" />
    </form>
  );
}
