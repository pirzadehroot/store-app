"use client";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

interface IFilterMobileType {
  isForMobile: boolean;
}

interface FilterSection {
  key: string;
  title: string;
  type: "range" | "checkbox";
  options?: string[];
}

const filterSections: FilterSection[] = [
  { key: "price", title: "حجم کالا", type: "range" },
  {
    key: "category",
    title: "دسته بندی",
    type: "checkbox",
    options: ["لباس مردانه", "لباس زنانه", "کفش"],
  },
  {
    key: "brand",
    title: "برند",
    type: "checkbox",
    options: ["برند A", "برند B", "برند C"],
  },
  {
    key: "brand",
    title: "برند",
    type: "checkbox",
    options: ["برند A", "برند B", "برند C"],
  },
  {
    key: "brand",
    title: "برند",
    type: "checkbox",
    options: ["برند A", "برند B", "برند C"],
  },
  {
    key: "brand",
    title: "برند",
    type: "checkbox",
    options: ["برند A", "برند B", "برند C"],
  },
  {
    key: "brand",
    title: "برند",
    type: "checkbox",
    options: ["برند A", "برند B", "برند C"],
  },
  {
    key: "brand",
    title: "برند",
    type: "checkbox",
    options: ["برند A", "برند B", "برند C"],
  },
];

export default function ProductFilter({ isForMobile = false }: IFilterMobileType) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    price: false,
    category: false,
    brand: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderFilterOptions = (section: FilterSection) => {
    if (section.type === "range") {
      return (
        <label className="flex items-center hover:bg-gray-100 p-1 cursor-pointer rounded-md dark:hover:bg-gray-750">
          <input type="range" className="ml-2" />
        </label>
      );
    } else if (section.type === "checkbox" && section.options) {
      return section.options.map((option, index) => (
        <label
          key={index}
          className="flex items-center hover:bg-gray-100 p-1 cursor-pointer rounded-md dark:hover:bg-gray-750"
        >
          <input
            type="checkbox"
            className="ml-2 size-4 rounded border-gray-300"
          />
          <span>{option}</span>
        </label>
      ));
    }
    return null;
  };

  return (
    <div
      className={`sticky text-gray-600 top-3 border duration-500 border-gray-200 rounded-lg p-3 pb-0 dark:!text-gray-110 dark:border-gray-750 dark:bg-gray-800 ${
        isForMobile ? "border-0 overflow-y-scroll" : ""
      }`}
    >
      <div className="flex mb-5 gap-2 items-center">
        <VscSettings size={30} />
        <h2 className="text-lg">فیلتر ها</h2>
      </div>
      {filterSections.map((section) => (
        <div key={section.key} className="my-2">
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full flex justify-between items-center py-2 text-gray-700 font-medium"
          >
            <span className="text-gray-700 dark:text-gray-50">{section.title}</span>
            <IoChevronDown
              className={`w-5 h-5 transition-transform text-gray-400 ${
                openSections[section.key] ? "rotate-180" : ""
              }`}
              size={25}
            />
          </button>
          {openSections[section.key] && (
            <div className="mt-2 space-y-2">{renderFilterOptions(section)}</div>
          )}
          <hr />
        </div>
      ))}
      <div className="my-2">
        <button className="w-full flex justify-between items-center py-2 text-gray-700 font-medium">
          <span className="text-gray-700 dark:text-gray-50">ارسال امروز</span>
          <label className="flex cursor-pointer items-center justify-between p-1">
            <div className="relative inline-block">
              <input
                type="checkbox"
                className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 dark:bg-gray-700 bg-white checked:border-red-500 dark:checked:border-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              />
              <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-gray-400 transition-all duration-200 peer-checked:left-7 peer-checked:bg-red-500 dark:peer-checked:bg-red-500"></span>
            </div>
          </label>
        </button>
      </div>
    </div>
  );
}