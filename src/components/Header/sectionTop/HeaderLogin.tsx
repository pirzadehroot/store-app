import Link from "next/link";
import React from "react";
import { HiOutlineUser } from "react-icons/hi2";

export default function HeaderLogin() {
  return (
    <Link
      href={"/login"}
      className="flex items-center gap-2 dark:text-white text-gray-500 "
    >
      <HiOutlineUser
        size={30}
        className=" transition-colors hover:text-gray-400"
      />
      <span>ورود / عضویت </span>
    </Link>
  );
}
