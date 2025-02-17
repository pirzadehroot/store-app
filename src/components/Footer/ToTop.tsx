import React from "react";
import { FaChevronUp } from "react-icons/fa6";

export default function ToTop() {
  return (
    <>
      <a
        href={"#top"}
        className="max-lg:hidden fixed left-7 bottom-7  z-50 border-2 border-red-500 p-0.5  rounded-xl hover:scale-110 transition-transform"
      >
        <FaChevronUp
          className="text-white dark:text-gray-925 bg-red-500 p-2 rounded-xl border-2 border-gray-200 dark:border-gray-925"
          size={40}
        />
      </a>
      <a
        href={"#top"}
        className="max-lg:visible lg:hidden fixed left-3 bottom-20  z-50 border-2 border-red-500 p-0.5  rounded-xl active:scale-110 transition-transform"
      >
        <FaChevronUp
          className="text-white bg-red-500 p-2 rounded-xl border-2 border-gray-200 dark:border-gray-925"
          size={35}
        />
      </a>
    </>
  );
}
