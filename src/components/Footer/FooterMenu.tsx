"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiGithubLine, RiTelegram2Line } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { GoTriangleLeft } from "react-icons/go";

interface LinkItem {
  href: string;
  label: string;
}

interface MenuItem {
  title: string;
  links: LinkItem[];
}

const FooterMenu: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(10);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? 10 : index);
  };

  const menuItems: MenuItem[] = [
    {
      title: "دسترسی سریع",
      links: [
        { href: "/", label: "تماس با ما" },
        { href: "/", label: "درباره ما" },
        { href: "/", label: "قوانین و مقررات" },
        { href: "/", label: "سوالات متداول" },
      ],
    },
    {
      title: "خدمات مشتریان",
      links: [
        { href: "/", label: "پشتیبانی" },
        { href: "/", label: "پیگیری سفارش" },
        { href: "/", label: "بازگرداندن کالا" },
        { href: "/", label: "گارانتی" },
      ],
    },
    {
      title: "راهنمای خرید",
      links: [
        { href: "/", label: "نحوه ثبت سفارش" },
        { href: "/", label: "روش‌های پرداخت" },
        { href: "/", label: "شرایط تحویل" },
        { href: "/", label: "تخفیف‌ها" },
      ],
    },
  ];

  return (
    <div className="py-10 grid grid-cols-4 max-md:grid-cols-1 max-md:justify-items-center max-md:text-center items-start gap-5">
      {menuItems.map((item, index) => (
        <div key={index} className="w-full">
          <button
            className="w-full flex justify-between items-center max-md:border-b border-border max-md:pb-3"
            onClick={() => toggleAccordion(index)}
          >
            <h5>{item.title}</h5>
            <span className="md:hidden">
              <GoTriangleLeft
                size={22}
                className={`${openIndex === index ? "-rotate-90" : ""}`}
              />
            </span>
          </button>
          <div className="border-t-2 border-red-500 w-[15%] pb-5 mt-1 max-md:hidden"></div>
          <div
            className={`${openIndex === index ? "block" : "hidden"} md:block`}
          >
            <ul className="space-y-5 max-md:py-4">
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-gray-500 dark:text-gray-300 hover:text-red-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="">
        <h5 className="text-lg">شبکه های اجتماعی</h5>
        <div className="border-t-2 border-red-500 w-[15%] pb-5 mt-1 max-sm:hidden"></div>
        <div className="space-y-4">
          <p className="text-sm font-light text-gray-500 max-sm:text-center dark:text-gray-300 text-justify">
            برای اطلاع از جدیدترین تخفیف‌ها، در شبکه‌های اجتماعی ما را دنبال
            کنید.
          </p>
          <ul className="flex justify-around gap-6 max-sm:justify-center">
            <Link href={"/"}>
              <FaInstagram
                size={30}
                className={"text-gray-500 hover:text-red-500"}
              />
            </Link>
            <Link href={"/"}>
              <FaLinkedin
                size={30}
                className={"text-gray-500 hover:text-red-500"}
              />
            </Link>
            <Link href={"/"}>
              <RiTelegram2Line
                size={30}
                className={"text-gray-500 hover:text-red-500"}
              />
            </Link>
            <Link href={"/"}>
              <RiGithubLine
                size={30}
                className={"text-gray-500 hover:text-red-500"}
              />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
