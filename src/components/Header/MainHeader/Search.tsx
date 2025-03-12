"use client";
import React, { useState } from "react";

function SearchCategorySelector() {
  const [selectedCategory, setSelectedCategory] =
    useState("همه‌ی دسته‌بندی‌ها");

  const categories = ["همه‌ی دسته‌بندی‌ها", "سرگرمی", "تکنولوژی", "خانگی"];
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
        <SearchCategorySelector />
        <div className="border rounded-xl border-border bg-bg_low p-2.5 pr-6 -mr-5">
          <input
            type="text"
            placeholder="جستجو در محصولات و کالاها ..."
            className="outline-none bg-transparent w-96 max-xl:w-52"
          />
        </div>
      </div>
    </div>
  );
}
