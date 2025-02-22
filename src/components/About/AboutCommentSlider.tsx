"use client";
import { GoCommentDiscussion } from "react-icons/go";
import Container from "../Container";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "../../../public/images/about/comments/22.png";
import { Autoplay } from "swiper/modules";
import { TiStarFullOutline } from "react-icons/ti";

const items = [
  {
    id: Math.random(),
    rate: 4,
    image: image1,
    title: "محسن",
    comment:
      "خوبه دوست دارم کارشون رو خیل رو موارد دیگه تعثییر میزاره ولی خوب نمیشه کقت همیشه هم خوبه.",
  },
  {
    id: Math.random(),
    rate: 3,
    image: image1,
    title: "علی",
    comment: "تجربه خوبی بود، اما می‌تواند بهتر باشد.",
  },
  {
    id: Math.random(),
    rate: 5,
    image: image1,
    title: "رضا",
    comment: "عالی! واقعاً راضی‌ام.",
  },
  {
    id: Math.random(),
    rate: 2,
    image: image1,
    title: "نازنین",
    comment: "چندان راضی نبودم.",
  },
];

export default function AboutCommentSlider() {
  return (
    <div className="py-10 mt-20 bg-gray-200 dark:bg-slate-800">
      <Container>
        <div className="flex gap-2 items-center py-10">
          <GoCommentDiscussion size={25} />
          <h2 className="text-2xl">نظرات کاربران</h2>
        </div>
        <div>
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
                <div className="flex flex-col gap-3 p-4  rounded-lg bg-white dark:bg-gray-900 ">
                  <div className="flex gap-1">
                    {Array.from({ length: item.rate }).map((_, index) => (
                      <span key={index}>
                        <TiStarFullOutline
                          size={25}
                          className="text-yellow-500"
                        />
                      </span>
                    ))}
                  </div>
                  <span className="text-sm ">{item.comment}</span>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <h3 className="font-medium">{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
