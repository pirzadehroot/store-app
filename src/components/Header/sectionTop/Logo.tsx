import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/logo/logo.svg"

export default function Logo() {
  return (
    <Link href={"/"} className="text-3xl mx-5">
      <Image
        src={logo}
        alt={"site logo"}
        width={169}
        height={69}
      />
    </Link>
  );
}
