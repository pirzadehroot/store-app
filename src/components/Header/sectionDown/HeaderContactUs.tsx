import ToPersianNumber from "../../../utils/ToPersianNumber";
import Link from "next/link";
import contactIcon from "@/../public/images/headerIcons/contact.svg";
import Image from "next/image";

export default function HeaderContactUs() {
  return (
    <div className="flex items-center">
      <span className="flex text-gray-600 dark:text-gray-100 items-center max-sm:hidden">
        <ToPersianNumber number={43625743} />-
        <span className="text-red-500 dark:text-gray-100 flex ml-2">
          <ToPersianNumber number={21} />
          <ToPersianNumber number={0} />
        </span>
        <Image
          className="text-gray-500 dark:bg-gray-700 dark:text-white bg-white p-1 rounded-full"
          priority
          src={contactIcon}
          alt={"homeIcon"}
          width={28}
          height={28}
        />
      </span>
      <Link href={"tel:43625743"} className={"sm:hidden max-sm:visible mx-2"}>
        <Image
          className="text-gray-500 dark:text-white"
          priority
          src={contactIcon}
          alt={"homeIcon"}
          width={28}
          height={28}
        />
      </Link>
    </div>
  );
}
