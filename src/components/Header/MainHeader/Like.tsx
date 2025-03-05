import Link from "next/link";
import React from "react";
import { BiHeart } from "react-icons/bi";

export default function Like() {
  return (
    <Link href={"/cart"} className="relative ml-3 text-gray-500">
      <BiHeart size={33} className="hover:text-gray-400 transition-colors" />
      <span className="absolute -top-1 -left-1 bg-red-500 py-0.5 px-1.5 text-white text-[10px] rounded-full">
        1
      </span>
    </Link>
  );
}
