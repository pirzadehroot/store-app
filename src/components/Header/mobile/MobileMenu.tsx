"use client";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiUsersThreeLight } from "react-icons/pi";
import ThemeToggle from "../sectionTop/ThemeToggle";
import SearchBoxMobile from "./SearchBoxMobile";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md  dark:text-gray-100 text-gray-800"
      >
        {isOpen ? (
          <HiXMark
            size={32}
            className="text-gray-500 dark:bg-gray-800 dark:text-white"
          />
        ) : (
          <HiBars3BottomRight
            className="text-gray-500 dark:bg-gray-800 dark:text-white"
            size={32}
          />
        )}
      </button>

      {/* منوی مخفی */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)} // بستن با کلیک روی بک‌دراپ
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-gray-850 shadow-lg transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-row-reverse justify-between">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500  dark:text-white  "
          >
            <IoIosCloseCircleOutline size={30} />
          </button>
          <button className="text-gray-500  dark:text-white  ">
            <ThemeToggle />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          <SearchBoxMobile />
          <li className="group">
            <Link
              href={""}
              className={`relative flex gap-1 items-center dark:text-gray-100 dark:hover:text-red-500
               transition-colors duration-300 py-1.5`}
            >
              <PiUsersThreeLight size={25} />
              درباه ما
            </Link>
          </li>
          <li className="group">
            <Link
              href={""}
              className={`relative flex gap-1 items-center dark:text-gray-100 dark:hover:text-red-500
               transition-colors duration-300 py-1.5`}
            >
              <PiUsersThreeLight size={25} />
              درباه ما
            </Link>
          </li>
          <li className="group">
            <Link
              href={"/"}
              className={`relative flex gap-1 items-center dark:text-gray-100 dark:hover:text-red-500
               transition-colors duration-300 py-1.5`}
            >
              <PiUsersThreeLight size={25} />
              درباه ما
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
