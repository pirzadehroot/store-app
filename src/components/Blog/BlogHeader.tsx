import Image from "next/image";
import React from "react";
import blog_img from "@/../public/images/blog/blog-new-10.jpg";
import Link from "next/link";
import { LuGamepad2 } from "react-icons/lu";

export default function BlogHeader() {
  const sidebarLinks = [
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    {
      href: "/blog",
      text: "بازی ویدئویی",
      icon: <LuGamepad2 size={25} className="ml-2" />,
    },
    // Add more links here if needed
  ];

  const images = [
    {
      className: "col-span-4",
      width: 1000,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
    {
      className: "col-span-4",
      width: 1000,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
    {
      className: "col-span-4",
      width: 1000,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
    {
      className: "col-span-3",
      width: 500,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
    {
      className: "col-span-3",
      width: 500,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
    {
      className: "col-span-3",
      width: 500,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
    {
      className: "col-span-3",
      width: 500,
      height: 200,
      title: "این عنوان مقاله است که ...",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-2 p-5 rounded-lg shadow-lg border">
          <ul className="space-y-4 text-sm">
            {sidebarLinks.map((link, index) => (
              <li key={index} className="hover:text-red-500">
                <Link href={link.href} className="flex" aria-label={link.text}>
                  {link.icon}
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10">
          {images.map((image, index) => (
            <Link
              key={index}
              href={"/"}
              className={`rounded-lg relative ${image.className}`}
            >
              <Image
                className="rounded-lg"
                src={blog_img}
                alt="blog_Images"
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>
              <h3 className="text-center absolute right-0 left-0 bottom-10 text-sm text-white">
                {image.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
