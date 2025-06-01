'use client';
import Link from 'next/link';
import { CiShoppingCart } from 'react-icons/ci';

export default function CartIcon() {
  return (
    <div>
      <Link href={'/cart'} className="relative">
        <CiShoppingCart
          size={30}
          className="hover:text-hover_low transition-colors"
        />
        <span className="absolute ext-white -bottom-1 right-4 bg-red-500 text-sm px-1.5 text-white rounded-md border-2 ">
          1
        </span>
      </Link>
    </div>
  );
}
