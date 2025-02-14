import Link from "next/link";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";

export default function FooterNavBar() {
  const links = [
    {
      href: "/",
      icon: <BiHomeAlt2 size={28} className="text-2xl" />,
      title: "خانه",
    },
    {
      href: "/",
      icon: <TbCategory size={28} className="text-2xl" />,
      title: "دسته بندی ها",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg max-lg:visible lg:hidden">
      <div className=" border-t-2 border-gray-110 dark:border-gray-750 py-3 flex justify-around text-center items-center">
        {links.map((link, index) => (
          <div key={index} className="px-4 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700">
              <Link href={link.href} className="flex-col text-justify">
                {link.icon}
                <div
                  className={"text-sm font-semibold text-nowrap text-center"}
                >
                  {link.title}
                </div>
              </Link>
            </div>
          </div>
        ))}

        <div className="px-4 cursor-pointer relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700">
            <Link href={"/cart"} className="flex-col justify-center">
              <div>
                <LuShoppingCart size={28} className="text-2xl" />
              </div>
              <div className={"text-sm font-semibold text-nowrap "}>
                سبد خرید
              </div>
              <span className="absolute -top-2 -right-2.5 bg-red-500 py-0.5 px-1.5 text-white text-[10px] rounded-md border border-white">
                1
              </span>
            </Link>
          </div>
        </div>
        <div className="px-4 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700">
            <Link href={"/login"} className="flex-col text-justify">
              <FaRegUser size={27} className="text-2xl" />
              <div className={"text-sm font-semibold text-nowrap text-center"}>
                حساب کاربری
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
