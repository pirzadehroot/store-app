"use client";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image from "@/assets/images/footerIcons/svg-image-26.svg";
import image1 from "@/assets/images/footerIcons/svg-image-27.svg";
import image2 from "@/assets/images/footerIcons/svg-image-28.svg";
import image3 from "@/assets/images/footerIcons/svg-image-29.svg";

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
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div className="border rounded-xl p-7 bg-white dark:bg-gray-800">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="embla__slide__number flex gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="text-gray-110"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
