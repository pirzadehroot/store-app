"use client";
import Link from "next/link";
import ToPersianNumber from "../../../utils/ToPersianNumber";
import { LuShoppingCart } from "react-icons/lu";

export default function CartIcon() {
  return (
    <div>
      <Link href={"/cart"} className="relative">
        <LuShoppingCart
          size={30}
          className="hover:text-hover_low transition-colors"
        />
        <span className="absolute ext-white -bottom-1 -right-2.5 bg-red-500 text-sm px-1.5 text-white rounded-md border ">
          <ToPersianNumber number={1} />
        </span>
      </Link>
    </div>
  );
}
