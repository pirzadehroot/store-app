import React from "react";
import { LuSearch } from "react-icons/lu";

export default function SearchBoxMobile() {
  return (
    <form className="my-2">
      <div className="border rounded-xl flex bg-gray-100 dark:bg-gray-850 dark:border-gray-500 items-center p-2 pr-6 flex-1 ml-2">
        <input
          type="text"
          placeholder="جستجو ..."
          className="outline-none bg-transparent w-auto"
        />
        <LuSearch size={25} className="text-gray-500 cursor-pointer" />
      </div>
    </form>
  );
}
