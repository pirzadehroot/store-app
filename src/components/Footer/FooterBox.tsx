"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image from "../../../public/images/footerIcons/svg-image-26.svg";
import image1 from "../../../public/images/footerIcons/svg-image-27.svg";
import image2 from "../../../public/images/footerIcons/svg-image-28.svg";
import image3 from "../../../public/images/footerIcons/svg-image-29.svg";
import { Autoplay } from "swiper/modules";

const items = [
  {
    id: 1,
    image: image,
    title: "پشتیبانی تا ۱۲ شب",
    description: "حتی جمعه ها",
  },
  {
    id: 2,
    image: image1,
    title: "پشتیبانی تا ۱۲ شب",
    description: "حتی جمعه ها",
  },
  {
    id: 3,
    image: image2,
    title: "پشتیبانی تا ۱۲ شب",
    description: "حتی جمعه ها",
  },
  {
    id: 4,
    image: image3,
    title: "پشتیبانی تا ۱۲ شب",
    description: "حتی جمعه ها",
  },
  {
    id: 5,
    image: image3,
    title: "پشتیبانی تا ۱۲ شب",
    description: "حتی جمعه ها",
  },
];

export default function FooterBox() {
  return (
    <div className="border rounded-xl p-7 -z-20 bg-white dark:bg-gray-800">
      {items.length >= 5 ? (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex gap-3 justify-center -z-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  className={"text-gray-110"}
                  width={40}
                  height={40}
                />
                <div>
                  <h3>{item.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 ">
          {items.map((item) => (
            <div key={item.id} className="flex justify-center  gap-3">
              <Image
                src={item.image}
                className={""}
                alt={item.title}
                width={40}
                height={40}
              />
              <div>
                <h3>{item.title}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
