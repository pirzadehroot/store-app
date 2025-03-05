"use client";
import { GoCommentDiscussion } from "react-icons/go";
import Image from "next/image";
import image1 from "@/assets/images/about/comments/22.png";
import { TiStarFullOutline } from "react-icons/ti";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  {
    id: 1,
    rate: 4,
    image: image1,
    title: "محسن",
    comment:
      "خوبه دوست دارم کارشون رو خیل رو موارد دیگه تعثییر میزاره ولی خوب نمیشه کقت همیشه هم خوبه.",
  },
  {
    id: 2,
    rate: 3,
    image: image1,
    title: "علی",
    comment: "تجربه خوبی بود، اما می‌تواند بهتر باشد.",
  },
  {
    id: 3,
    rate: 5,
    image: image1,
    title: "رضا",
    comment: "عالی! واقعاً راضی‌ام.",
  },
  {
    id: 4,
    rate: 2,
    image: image1,
    title: "نازنین",
    comment: "چندان راضی نبودم.",
  },
];

export default function AboutCommentSlider() {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="py-10 mt-20 bg-gray-200 dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="flex gap-2 items-center py-10">
          <GoCommentDiscussion size={25} />
          <h2 className="text-2xl">نظرات کاربران</h2>
        </div>
        <div>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {items.map((item) => (
                <div
                  className="flex flex-col gap-3 p-4  rounded-lg bg-white dark:bg-gray-900 embla__slide"
                  key={item.id}
                >
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
