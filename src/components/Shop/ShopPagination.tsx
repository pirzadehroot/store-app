import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";

export default function ShopPagination() {
  return (
    <div className="flex justify-center gap-3 mt-10 items-center text-sm">
      <Link href={"/"}>
        <GoChevronLeft
          size={32}
          className="rotate-180 z-0 rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 dark:bg-gray-800 bg-gray-55 border-2"
        />
      </Link>
      <Link
        href={"/"}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500 hover:border-red-500 dark:bg-gray-800 bg-gray-55 p-1 px-3 border-2"
      >
        1
      </Link>
      <Link
        href={"/"}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 dark:bg-gray-800 bg-gray-55 p-1 px-3 border-2"
      >
        2
      </Link>
      <Link
        href={"/"}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 dark:bg-gray-800 bg-gray-55 p-1 px-3 border-2"
      >
        3
      </Link>
      <Link
        href={"/"}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 dark:bg-gray-800 bg-gray-55 p-1 px-3 border-2"
      >
        4
      </Link>

      <Link href={"/"}>
        <GoChevronLeft
          size={32}
          className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 dark:bg-gray-800 bg-gray-55 border-2"
        />
      </Link>
    </div>
  );
}
