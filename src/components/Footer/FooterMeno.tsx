"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiGithubLine, RiTelegram2Line } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FooterMenu = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
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
    <div className="py-10 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center max-sm:text-center items-center gap-10">
      {menuItems.map((item, index) => (
        <div key={index} className="w-full">
          <button
            className="w-full flex justify-between items-center max-sm:border-b max-sm:pb-2"
            onClick={() => toggleAccordion(index)}
          >
            <h5 className="font-normal text-lg">{item.title}</h5>
            <span className="sm:hidden">{openIndex === index ? "−" : "+"}</span>
          </button>
          <div className="border-t border-red-500 mt-1.5 h-1 w-12 max-sm:hidden"></div>
          <div
            className={`${openIndex === index ? "block" : "hidden"} sm:block`}
          >
            <ul className="space-y-4 mt-4">
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
        <h5 className="font-normal text-lg">دسترسی سریع</h5>
        <div className="border-t border-red-500 mt-1.5 h-1 w-12 max-sm:hidden"></div>
        <div className="space-y-4 mt-4">
          <p className="text-sm font-light text-gray-500 max-sm:text-center dark:text-gray-300 text-justify">
            برای اطلاع از جدیدترین تخفیف‌ها، در شبکه‌های اجتماعی ما را دنبال
            کنید.
          </p>
          <ul className="flex justify-start gap-6 max-sm:justify-center">
            <li>
              <Link href={"/"}>
                <FaInstagram
                  size={30}
                  className={"text-gray-500 hover:text-red-500"}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaLinkedin
                  size={30}
                  className={"text-gray-500 hover:text-red-500"}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <RiTelegram2Line
                  size={30}
                  className={"text-gray-500 hover:text-red-500"}
                />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <RiGithubLine
                  size={30}
                  className={"text-gray-500 hover:text-red-500"}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
