'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import image from '@/assets/images/footerIcons/svg-image-26.svg';
import image1 from '@/assets/images/footerIcons/svg-image-27.svg';
import image2 from '@/assets/images/footerIcons/svg-image-28.svg';
import image3 from '@/assets/images/footerIcons/svg-image-29.svg';

interface SlideItem {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

const items: SlideItem[] = [
  {
    id: 1,
    image: image,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 2,
    image: image1,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 3,
    image: image2,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 4,
    image: image3,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 5,
    image: image3,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 6,
    image: image3,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 7,
    image: image3,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
  {
    id: 8,
    image: image3,
    title: 'پشتیبانی تا ۱۲ شب',
    description: 'حتی جمعه ها',
  },
];

export default function FooterBox() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ]);

  return (
    <div className="border rounded-xl p-4 bg-bg border-border">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-2">
          {items.map((item) => (
            <div
              className="flex-shrink-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
              key={item.id}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={42}
                  height={42}
                  className="rounded-md"
                />
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">
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
