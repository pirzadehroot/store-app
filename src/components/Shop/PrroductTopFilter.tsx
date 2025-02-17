import { BsFilterRight } from "react-icons/bs";
import FilterMobile from "./FilterMobile";

export default function PrroductTopFilter() {
  return (
    <div className="flex select-none space-x-8 max-sm:space-x-4 justify-start items-center mb-5 bg-gray-100 dark:bg-gray-850 text-gray-500 dark:text-gray-110 rounded-md p-2">
      <div className={"md:hidden max-sm:visible"}>
        <FilterMobile />
      </div>
      <BsFilterRight size={30} className={"max-sm:hidden"} />
      <label className="cursor-pointer">
        <input type="radio" className="peer hidden" />
        <span className="hover:text-red-500 peer-checked:text-red-500 text-sm">
          کمترین قیمت
        </span>
      </label>

      <label className="cursor-pointer">
        <input
          type="radio"
          name="radio"
          value="react"
          className="peer hidden"
        />
        <span className="hover:text-red-500 peer-checked:text-red-500 text-sm">
          بیشترین قیمت
        </span>
      </label>

      <label className="cursor-pointer">
        <input type="radio" name="radio" value="vue" className="peer hidden" />
        <span className="hover:text-red-500 peer-checked:text-red-500 text-sm">
          بیشترین تخفیف
        </span>
      </label>
    </div>
  );
}
