'use client';
import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { LuSearch } from 'react-icons/lu';

function SearchCategorySelector() {
  const [selectedCategory, setSelectedCategory] =
    useState('همه‌ی دسته‌بندی‌ها');

  const categories = ['همه‌ی دسته‌بندی‌ها', 'سرگرمی', 'تکنولوژی', 'خانگی'];
  return (
    <div className="relative w-36">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="outline-none text-white bg-red-500 cursor-pointer w-full py-3 px-4 rounded-xl shadow-md"
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
            className="bg-bg_low text-low"
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function Search() {
  return (
    <div className="mr-10 text-sm">
      <div className="flex items-center">
        <div className="flex gap-3 border rounded-md border-border bg-bg_low p-2 ">
          <LuSearch size={24} className="text-low border-border" />
          <span className="border border-border rounded-full"></span>
          <input
            type="text"
            placeholder="جستجو در محصولات ..."
            className="outline-none  bg-transparent w-96"
          />
        </div>
      </div>
    </div>
  );
}
