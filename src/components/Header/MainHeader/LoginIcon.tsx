import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";

export default function LoginIcon() {
  return (
    <div>
      <Link
        href={"/login"}
        className="flex items-center gap-2 hover:text-hover_low transition-colors"
      >
        <AiOutlineUser size={30} />
        <span>ورود / عضویت </span>
      </Link>
    </div>
  );
}
