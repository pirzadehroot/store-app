"use client";
import { useState } from "react";
import ProductFilter from "./ProductFilter";

export default function FilterMobile() {
  const [isMenoOpen, setMenoIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setMenoIsOpen(!isMenoOpen)}
        className="bg-red-500 rounded-md p-2 text-white  ml-4"
      >
        فیلتر ها
      </button>
      <div
        className={` fixed bottom-0 right-0 left-0 rounded-t-xl shadow-lg w-full dark:bg-gray-800 h-2/3 bg-white transform transition-transform duration-500 ${
          isMenoOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button className="m-2" onClick={() => setMenoIsOpen(!isMenoOpen)}>
          خروج از فیلتر
        </button>
        <ProductFilter isForMobile={true} />
      </div>
    </div>
  );
}
