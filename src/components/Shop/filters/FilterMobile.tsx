'use client';
import { useState } from 'react';
import ProductFilter from './ProductFilter';
import { HiOutlineXCircle } from 'react-icons/hi2';

export default function FilterMobile() {
  const [isMenoOpen, setMenoIsOpen] = useState(false);

  return (
    <div className="pl-2">
      <button
        onClick={() => setMenoIsOpen(!isMenoOpen)}
        className="bg-red-500 active:bg-opacity-70 active:scale-105 rounded-md p-2 text-white "
      >
        فیلتر ها
      </button>
      <div
        className={`fixed bottom-0 right-0 left-0 rounded-t-xl border border-border p-5 shadow-lg w-full dark:bg-gray-800 h-2/3 bg-white transform transition-transform duration-500 ${
          isMenoOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <button className="m-2" onClick={() => setMenoIsOpen(!isMenoOpen)}>
          <HiOutlineXCircle size={30} />
        </button>
        <ProductFilter isForMobile={true} />
      </div>
    </div>
  );
}
