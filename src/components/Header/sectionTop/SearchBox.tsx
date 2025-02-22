"use client";
import React from "react";
import Select from "react-select";
import { LuSearch } from "react-icons/lu";

const options = [
  { value: "all", label: "همه‌ی دسته‌بندی‌ها" },
  { value: "entertainment", label: "سرگرمی" },
  { value: "technology", label: "تکنولوژی" },
  { value: "home", label: "خانگی" },
];

export default function SearchBox() {
  return (
    <div className="mr-10">
      <div className="flex items-center">
        <div className="w-36 z-50">
          <Select
            instanceId="search-select" // اضافه کردن این خط
            options={options}
            defaultValue={options[0]}
            className="w-full"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#ef4444",
                color: "white",
                borderRadius: "12px",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                border: "none",
              }),
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? "#f87171" : "#fff",
                color: isFocused ? "#fff" : "#333",
                padding: "10px",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
                fontSize: "14px",
              }),
              menu: (base) => ({
                ...base,
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                overflow: "hidden",
              }),
            }}
          />
        </div>

        {/* Search Box */}
        <div className="border rounded-xl flex bg-gray-55 dark:bg-gray-850 dark:border-gray-500 items-center p-2 pr-6 flex-1 -mr-5 ml-2">
          <input
            type="text"
            placeholder="جستجو در محصولات و کالا ها ..."
            className="outline-none bg-transparent w-96"
          />
          <LuSearch size={25} className="text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
