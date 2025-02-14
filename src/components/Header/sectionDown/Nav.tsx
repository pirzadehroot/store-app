"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiShop } from "react-icons/ci";
import { MdOutlineInsertChartOutlined } from "react-icons/md";
import {
  PiHouseLight,
  PiPhoneCallThin,
  PiUsersThreeLight,
} from "react-icons/pi";
import { RxReader } from "react-icons/rx";

export default function Nav() {
  const pathName = usePathname();
  const links = [
    { icon: <PiHouseLight size={25} />, title: "صفحه اصلی", url: "/" },
    { icon: <CiShop size={25} />, title: "فروشگاه", url: "/shop" },
    { icon: <RxReader size={25} />, title: "وبلاگ", url: "/blog" },
    {
      icon: <MdOutlineInsertChartOutlined size={25} />,
      title: "فروشنده شوید",
      url: "/become-a-seller",
    },
    {
      icon: <PiUsersThreeLight size={25} />,
      title: "درباره ما",
      url: "/about-us",
    },
    {
      icon: <PiPhoneCallThin size={25} />,
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
                className={`relative flex gap-1 items-center dark:text-gray-100 dark:hover:text-red-500 ${
                  pathName === item.url
                    ? "!text-red-500"
                    : "text-gray-600  hover:text-red-500"
                } transition-colors duration-300 py-1.5`}
              >
                {item.icon}
                {item.title}
                <div
                  className={`absolute left-0 -bottom-1 h-0.5 bg-red-500 transform scale-x-0 ${
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
