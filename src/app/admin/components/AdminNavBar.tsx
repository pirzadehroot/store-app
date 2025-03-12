"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiArticle } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";

const items = [
  {
    icon: <AiOutlineDashboard size={22} />,
    title: "داشبورد",
    url: "/admin/dashboard",
  },
  {
    icon: <RxDashboard size={22} />,
    title: "دسته بندی ها",
    url: "/admin/categories",
  },
  {
    icon: <BsBoxSeam size={22} />,
    title: "محصولات",
    url: "/admin/products",
  },
  {
    icon: <PiArticle size={22} />,
    title: "مقالات",
    url: "/admin/articles",
  },
  {
    icon: <HiOutlineUsers size={22} />,
    title: "کاربران",
    url: "/admin/users",
  },
];

export default function AdminNavBar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-bg_low rounded-md border border-border p-5">
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            className={`rounded-lg p-2  ${
              "/admin/" + item.url === pathname ? "bg-red-500 text-white" : ""
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
