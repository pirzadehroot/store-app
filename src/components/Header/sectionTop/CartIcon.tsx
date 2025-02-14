// CartIcon.js
"use client";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

export default function CartIcon() {
  return (
    <Link
      href={"/cart"}
      className="relative ml-3 text-gray-500 dark:text-white"
    >
      <LuShoppingCart
        size={30}
        className="hover:text-gray-400  transition-colors"
      />
      <span className="absolute -bottom-1 -right-2.5 bg-red-500 py-0.5 px-1.5 text-white text-[10px] rounded-md border border-white">
        1
      </span>
    </Link>
  );
}
