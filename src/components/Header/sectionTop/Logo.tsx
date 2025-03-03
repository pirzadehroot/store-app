import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo/logo.svg";

export default function Logo() {
  return (
    <Link href={"/"} className="text-3xl ml-5">
      <Image src={logo} alt={"site logo"} width={169} height={69} />
    </Link>
  );
}
