'use client';
import brand_img1 from '@/assets/images/brands/brand-1.png';
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
    imgUrl: brand_img1,
    alt: 'brand 2',
  },
  {
    id: '3',
    imgUrl: brand_img1,
    alt: 'brand 3',
  },
  {
    id: '4',
    imgUrl: brand_img1,
    alt: 'brand 4',
  },
  {
    id: '5',
    imgUrl: brand_img1,
    alt: 'brand 5',
  },
  {
    id: '6',
    imgUrl: brand_img1,
    alt: 'brand 6',
  },
  {
    id: '7',
    imgUrl: brand_img1,
    alt: 'brand 7',
  },
  {
    id: '8',
    imgUrl: brand_img1,
    alt: 'brand 8',
  },
  {
    id: '9',
    imgUrl: brand_img1,
    alt: 'brand 1',
  },
  {
    id: '10',
    imgUrl: brand_img1,
    alt: 'brand 2',
  },
  {
    id: '11',
    imgUrl: brand_img1,
    alt: 'brand 3',
  },
  {
    id: '12',
    imgUrl: brand_img1,
    alt: 'brand 4',
  },
  {
    id: '13',
    imgUrl: brand_img1,
    alt: 'brand 5',
  },
  {
    id: '14',
    imgUrl: brand_img1,
    alt: 'brand 6',
  },
  {
    id: '15',
    imgUrl: brand_img1,
    alt: 'brand 7',
  },
  {
    id: '16',
    imgUrl: brand_img1,
    alt: 'brand 8',
  },
];

export default function HomeBrands() {
  const [emblaRef] = useEmblaCarousel({ direction: 'rtl' }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="overflow-hidden relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10">
          {brands.map((brand, index) => (
            <Image
              className="rounded-lg p-2 border-2 border-border"
              key={brand.id}
              src={brand.imgUrl}
              alt={brand.alt}
              width={160}
              height={160}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
