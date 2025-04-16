import Link from "next/link";
import { TbPhoneCall } from "react-icons/tb";

export default function NavContact() {
  return (
    <div className="flex items-center gap-2">
      <span className="flex max-sm:hidden max-lg:text-base">
        ۴۳۸۲۴۴۲۳-
        <span className="text-red-500 flex">۰۲۱</span>
      </span>
      <Link href={"tel:43625743"}>
        <TbPhoneCall size={27} className="p-1 rounded-full bg-bg max-lg:p-0" />
      </Link>
    </div>
  );
}
