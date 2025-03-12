import Link from "next/link";
import React from "react";
import { IoAddOutline } from "react-icons/io5";

export default function products() {
  return (
    <div>
      <div className="">
        <Link
          href={"products/add"}
          className="flex bg-green-500 p-2 text-white rounded-lg"
        >
          افزودن محصول
          <IoAddOutline size="22" />
        </Link>
      </div>
      <div>
        <div className=""></div>
      </div>
    </div>
  );
}
