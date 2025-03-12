'use client';
import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';

interface FilterMobileDto {
  isForMobile?: boolean;
  onFilter?: (filters: Record<string, any>) => void;
}

interface FilterDto {
  key: string;
  title: string;
  type: 'range' | 'checkbox';
  options?: string[];
}

const RangeSlider = ({
  section,
  handleFilterChange,
}: {
  section: FilterDto;
  handleFilterChange: (key: string, value: any) => void;
}) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <div className="flex-1">
        <label htmlFor="rangeInput" className="text-sm text-center py-2 block">
          {value1} - {value2} تومان
        </label>
        <input
          id="rangeInput"
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={value1}
          className="w-full accent-red-500"
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (val < value2) setValue1(val);
          }}
          style={{ cursor: 'pointer' }}
        />
        <input
          id="rangeInput2"
          type="range"
          min="0"
          max="100000"
          step="1000"
          value={value2}
          className="w-full accent-red-500 mt-2"
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (val > value1) setValue2(val);
          }}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

const CheckboxFilter = ({
  section,
  handleFilterChange,
}: {
  section: FilterDto;
  handleFilterChange: (key: string, value: any) => void;
}) => {
  return (
    <>
      {section.options?.map((option, index) => (
        <label
          key={index}
          className="group flex items-center cursor-pointer hover:bg-bg_hover_low p-1 rounded-md"
        >
          <input
            className="hidden peer gap-4"
            type="checkbox"
            onChange={(e) => handleFilterChange(section.key, e.target.checked)}
          />
          <span className="relative w-5 h-5 flex justify-center items-center bg-bg_low border-2 border-gray-400 rounded-md transition-all  peer-checked:border-red-500 peer-checked:bg-red-500"></span>
          <span className="pr-2 text-low group-hover:text-red-500 font-medium transition-colors duration-300">
            {option}
          </span>
        </label>
      ))}
    </>
  );
};

const filterSections: FilterDto[] = [
  { key: 'price', title: 'حجم کالا', type: 'range' },
  {
    key: 'category',
    title: 'دسته بندی',
    type: 'checkbox',
    options: ['لباس مردانه', 'لباس زنانه', 'کفش'],
  },
  {
    key: 'brand',
    title: 'برند',
    type: 'checkbox',
    options: ['برند A', 'برند B', 'برند C'],
  },
];

export default function ProductFilter({
  isForMobile = false,
  onFilter,
}: FilterMobileDto) {
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

  const handleFilterChange = (key: string, value: any) => {
    if (onFilter) {
      onFilter({ [key]: value });
    }
  };

  const renderFilterOptions = (section: FilterDto) => {
    if (section.type === 'range') {
      return (
        <RangeSlider
          section={section}
          handleFilterChange={handleFilterChange}
        />
      );
    } else if (section.type === 'checkbox' && section.options) {
      return (
        <CheckboxFilter
          section={section}
          handleFilterChange={handleFilterChange}
        />
      );
    }
    return null;
  };

  return (
    <div
      className={`sticky text-low top-28 border max-lg:border-0 border-border bg-bg_low rounded-lg p-3 pb-0 ${
        isForMobile ? 'w-full h-screen overflow-y-auto' : ''
      }`}
    >
      <div className="flex mb-5 gap-2 items-center max-lg:hidden">
        <VscSettings size={30} />
        <h2 className="text-lg">فیلتر ها</h2>
      </div>
      {filterSections.map((section, index) => (
        <div key={index} className="py-2">
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full flex justify-between items-center py-2"
          >
            {section.title}
            <IoChevronDown
              className={`w-5 h-5 transition-transform  ${
                openSections[section.key] ? 'rotate-180' : ''
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
        <button className="w-full flex justify-between items-center py-2">
          <span className="">ارسال امروز</span>
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
