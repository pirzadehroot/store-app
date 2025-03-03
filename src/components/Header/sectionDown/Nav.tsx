"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import homeIcon from "@/assets/images/headerIcons/home.svg";
import shopIcon from "@/assets/images/headerIcons/shop.svg";
import blogIcon from "@/assets/images/headerIcons/blog.svg";
import sellerIcon from "@/assets/images/headerIcons/seller.svg";
import aboutIcon from "@/assets/images/headerIcons/about.svg";
import contactIcon from "@/assets/images/headerIcons/contact.svg";

export default function Nav() {
  const pathName = usePathname();
  const links = [
    {
      icon: (
        <Image
          priority
          src={homeIcon}
          alt={"homeIcon"}
          width={20}
          height={20}
        />
      ),
      title: "صفحه اصلی",
      url: "/",
    },
    {
      icon: (
        <Image
          priority
          src={shopIcon}
          alt={"homeIcon"}
          width={20}
          height={20}
        />
      ),
      title: "فروشگاه",
      url: "/shop",
    },
    {
      icon: (
        <Image
          priority
          src={blogIcon}
          alt={"homeIcon"}
          width={20}
          height={20}
        />
      ),
      title: "وبلاگ",
      url: "/blog",
    },
    {
      icon: (
        <Image
          priority
          src={sellerIcon}
          alt={"homeIcon"}
          width={20}
          height={20}
        />
      ),
      title: "فروشنده شوید",
      url: "/become-a-seller",
    },
    {
      icon: (
        <Image
          priority
          src={aboutIcon}
          alt={"homeIcon"}
          width={20}
          height={20}
        />
      ),
      title: "درباره ما",
      url: "/about-us",
    },
    {
      icon: (
        <Image
          priority
          src={contactIcon}
          alt={"homeIcon"}
          width={20}
          height={20}
        />
      ),
      title: "تماس با ما",
      url: "/contact-us",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-8 py-1.5">
        {links &&
          links.map((item, index) => (
            <li key={index} className="group">
              <Link
                href={item.url}
                className={`relative flex gap-1 text-sm  items-center dark:text-gray-100 dark:hover:text-red-500 ${
                  pathName === item.url
                    ? "text-red-500"
                    : "text-gray-500 hover:text-red-500"
                } transition-colors duration-300 py-1`}
              >
                {item.icon}
                {item.title}
                <div
                  className={`absolute left-0 -bottom-1.5 h-0.5 bg-red-500 transform scale-x-0 ${
                    pathName === item.url
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  } transition-transform duration-300 w-full`}
                ></div>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
