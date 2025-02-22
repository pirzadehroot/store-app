// CartIcon.js
"use client";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi2";

export default function CartIcon() {
  return (
    <Link
      href={"/cart"}
      className="relative ml-3 p-1 hover:bg-red-400 hover:text-white rounded-md text-gray-500 dark:text-white"
    >
      <HiOutlineShoppingCart size={30} className="transition-colors" />
      <span className="absolute -bottom-1 -right-2.5 bg-red-500 py-0.5 px-1.5 text-white text-[10px] rounded-md border border-white">
        1
      </span>
    </Link>
  );
}
