import { LuPhoneCall } from "react-icons/lu";
import ToPersianNumber from "../../../utils/ToPersianNumber";
import Link from "next/link";
import { HiOutlinePhone } from "react-icons/hi2";

export default function HeaderContactUs() {
  return (
    <div className="flex items-center">
      <span className="flex text-gray-600 dark:text-gray-100 items-center max-sm:hidden">
        <ToPersianNumber number={43625743} />-
        <span className="text-red-500 dark:text-gray-100 flex ml-2">
          <ToPersianNumber number={21} />
          <ToPersianNumber number={0} />
        </span>
        <LuPhoneCall
          size={35}
          className="text-gray-500 dark:bg-gray-700 dark:text-white bg-white shadow-sm p-1 py-2 rounded-full"
        />
      </span>
      <Link href={"tel:43625743"} className={"sm:hidden max-sm:visible mx-2"}>
        <HiOutlinePhone size={28} className="text-gray-500 dark:text-white" />
      </Link>
    </div>
  );
}
