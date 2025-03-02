import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import notFound_img from "@/../public/images/404.png";

export const metadata: Metadata = {
  title: "صفحه 404",
  description: "متاسفانه صفحه ای یافت نشد!",
};

export default function NotFound() {
  return (
    <div className="container mx-auto">
      <div className="flex-row text-center">
        <Image
          className="mx-auto"
          src={notFound_img}
          alt={"not found page"}
          width={500}
          height={500}
        />
        <h1 className="my-7">صفحه مورد نظر یافت نشد!</h1>
        <Link
          href="/shop"
          className="text-blue-500 hover:text-blue-700 hover:underline"
        >
          بازگشت به فروشگاه
        </Link>
      </div>
    </div>
  );
}
