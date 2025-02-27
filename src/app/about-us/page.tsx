import React from "react";
import Container from "../../components/Container";
import Image from "next/image";
import back_img from "@/../public/images/about/121278.jpg";
import AboutCommentSlider from "../../components/About/AboutCommentSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "صفحه درباره ما",
};

export default function About() {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 gap-20 mt-20 ">
          <div className="space-y-5">
            <span className=" text-red-500">ما که هستیم ؟</span>
            <h1 className="text-3xl ">
              درباره فروشگاه آنلاین ما بیشتر بدانید!
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-justify ni">
              ما پلتفرمی مبتنی بر تکنولوژی هستیم که ماموریت خود را ایجاد
              تجربه‌ای خوشایند از خرید و فروش برای تمام مردم ایران می‌دانیم. به
              عنوان یکی از پر مخاطب ترین فروشگاه های آنلاین ایران و منطقه در
              مسیر تبدیل شدن به اولین مرجع خرید و فروش آنلاین هستیم و برای این
              هدف، ارائه خدمات منطبق بر استانداردهای جهانی، مهمترین وظیفه ماست.
              هویت ما بیش از هرچیز متأثر از مخاطبانمان است و بر اساس نیازهای
              آنها گام بر می‌داریم. به همین دلیل، مشتری محوری مهمترین ارزش کسب
              ‌و کار ماست.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={back_img}
              className="rounded-lg shadow-lg "
              alt={"about us"}
              width={500}
              height={300}
            />
          </div>
        </div>
      </Container>
      <AboutCommentSlider />
    </>
  );
}
