'use client';
import Link from 'next/link';
import { RiShoppingCartLine } from 'react-icons/ri';

export default function CartIcon() {
  return (
    <div>
      <Link href={'/cart'} className="relative">
        <RiShoppingCartLine size={30} />

        {/* <span className="absolute ext-white -bottom-1 right-4  bg-red-500 text-md px-2  text-white rounded-lg ">
          ۴
        </span> */}
      </Link>
    </div>
  );
}
