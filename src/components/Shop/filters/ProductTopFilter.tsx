import { BsFilterRight } from 'react-icons/bs';
import FilterMobile from './FilterMobile';

export default function ProductTopFilter() {
  return (
    <div className="flex space-x-8 max-sm:space-x-4 justify-start items-center mb-5 bg-bg_low border border-border rounded-lg p-2">
      <div className="lg:hidden">
        <FilterMobile />
      </div>

      <BsFilterRight size={30} className="max-sm:hidden" aria-label="فیلتر" />

      <label className="cursor-pointer">
        <input type="radio" name="filter" className="peer hidden" />
        <span className="hover:text-red-500 peer-checked:text-red-500 text-sm">
          کمترین قیمت
        </span>
      </label>

      <label className="cursor-pointer">
        <input type="radio" name="filter" className="peer hidden" />
        <span className="hover:text-red-500 peer-checked:text-red-500 text-sm">
          بیشترین قیمت
        </span>
      </label>

      <label className="cursor-pointer">
        <input type="radio" name="filter" className="peer hidden" />
        <span className="hover:text-red-500 peer-checked:text-red-500 text-sm">
          بیشترین تخفیف
        </span>
      </label>
    </div>
  );
}
