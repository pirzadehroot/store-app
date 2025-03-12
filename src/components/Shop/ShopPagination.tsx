import Link from 'next/link';
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';

export default function ShopPagination() {
  return (
    <div className="flex justify-center gap-3 mt-10 items-center text-sm">
      <Link href={'/'}>
        <HiMiniChevronRight
          size={32}
          className=" rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 bg-bg_low border-2"
        />
      </Link>
      <Link
        href={'/'}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500 hover:border-red-500 bg-bg_low p-1 px-2.5 border-2"
      >
        1
      </Link>
      <Link
        href={'/'}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 bg-bg_low p-1 px-2.5 border-2"
      >
        2
      </Link>
      <Link
        href={'/'}
        className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 bg-bg_low p-1 px-2.5 border-2"
      >
        3
      </Link>

      <Link href={'/'}>
        <HiMiniChevronLeft
          size={32}
          className="rounded-md dark:text-white text-gray-500 hover:text-red-500  hover:border-red-500 bg-bg_low border-2"
        />
      </Link>
    </div>
  );
}
