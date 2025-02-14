import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo/logo.svg";

export default function LogoFooter() {
  return (
    <Link href={"/"} className="text-3xl">
      <Image src={logo} alt={"site logo"} width={159} height={59} />
    </Link>
  );
}
