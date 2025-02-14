import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";

export default function HeaderLogin() {
  return (
    <Link
      href={"/login"}
      className="flex items-center dark:text-white text-gray-500 "
    >
      <BiUser size={30} className=" transition-colors hover:text-gray-400" />
    </Link>
  );
}
