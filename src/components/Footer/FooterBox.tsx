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

const FooterBox: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 4 }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  return (
    <div className="border rounded-xl p-7 bg-bg border-border">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {items.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div className="embla__slide__number flex gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={42}
                  height={42}
                />
                <div>
                  <h3>{item.title}</h3>
                  <span className="text-sm text-low">{item.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterBox;
