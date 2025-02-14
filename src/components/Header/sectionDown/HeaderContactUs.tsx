import { LuPhoneCall } from "react-icons/lu";
import PersianNumberComponent from "../../../utils/PersianNumberComponent";
import Link from "next/link";

export default function HeaderContactUs() {
  return (
    <div className="flex items-center">
      <span className="flex text-gray-600 dark:text-gray-100 items-center max-sm:hidden">
        <PersianNumberComponent number={43625743} />-
        <span className="text-red-500 dark:text-gray-100 flex ml-2">
          <PersianNumberComponent number={21} />
          <PersianNumberComponent number={0} />
        </span>
        <LuPhoneCall
          size={35}
          className="text-gray-500 dark:bg-gray-700 dark:text-white bg-white shadow-sm p-1 py-2 rounded-full"
        />
      </span>
      <Link href={"tel:"} className={"sm:hidden max-sm:visible"}>
        <LuPhoneCall size={25} className="text-gray-500 dark:text-white" />
      </Link>
    </div>
  );
}
