'use client';
import brand_img1 from '@/assets/images/brands/brand-1.png';
import brand_img2 from '@/assets/images/brands/brand-2.png';
import brand_img3 from '@/assets/images/brands/brand-3.png';
import brand_img4 from '@/assets/images/brands/brand-4.png';
import brand_img5 from '@/assets/images/brands/brand-5.png';
import brand_img6 from '@/assets/images/brands/brand-6.png';
import brand_img7 from '@/assets/images/brands/brand-7.png';
import brand_img8 from '@/assets/images/brands/brand-8.png';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const brands = [
  {
    id: '1',
    imgUrl: brand_img1,
    alt: 'brand 1',
  },
  {
    id: '2',
    imgUrl: brand_img2,
    alt: 'brand 2',
  },
  {
    id: '3',
    imgUrl: brand_img3,
    alt: 'brand 3',
  },
  {
    id: '4',
    imgUrl: brand_img4,
    alt: 'brand 4',
  },
  {
    id: '5',
    imgUrl: brand_img5,
    alt: 'brand 5',
  },
  {
    id: '6',
    imgUrl: brand_img6,
    alt: 'brand 6',
  },
  {
    id: '7',
    imgUrl: brand_img7,
    alt: 'brand 7',
  },
  {
    id: '8',
    imgUrl: brand_img8,
    alt: 'brand 8',
  },
  {
    id: '1',
    imgUrl: brand_img1,
    alt: 'brand 1',
  },
  {
    id: '2',
    imgUrl: brand_img2,
    alt: 'brand 2',
  },
  {
    id: '3',
    imgUrl: brand_img3,
    alt: 'brand 3',
  },
  {
    id: '4',
    imgUrl: brand_img4,
    alt: 'brand 4',
  },
  {
    id: '5',
    imgUrl: brand_img5,
    alt: 'brand 5',
  },
  {
    id: '6',
    imgUrl: brand_img6,
    alt: 'brand 6',
  },
  {
    id: '7',
    imgUrl: brand_img7,
    alt: 'brand 7',
  },
  {
    id: '8',
    imgUrl: brand_img8,
    alt: 'brand 8',
  },
];

export default function HomeBrands() {
  const [emblaRef] = useEmblaCarousel({ direction: 'rtl' }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="overflow-hidden relative rounded-xl">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-5">
          {brands.map((brand) => (
            <Image
              className="p-3 border-2 border-border rounded-lg"
              src={brand.imgUrl}
              alt={brand.alt}
              key={brand.id}
              width={160}
              height={160}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
