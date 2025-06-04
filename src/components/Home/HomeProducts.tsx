'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { HiMiniChevronRight, HiMiniChevronLeft } from 'react-icons/hi2';
import ProductItem from '../Product/ProductItem';
import { ProductDto } from '../Product/dto/product.dto';
import Link from 'next/link';

const products: ProductDto[] = [
  {
    id: '1',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '2',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '3',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '4',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '5',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '6',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,

    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '7',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '8',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '9',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '10',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '11',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '12',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    discount: 20,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
  {
    id: '13',
    title: 'محصول شماره 1',
    slug: 'محصول شماره 1',
    price: 353400000,
    imageUrl:
      'https://dkstatics-public.digikala.com/digikala-products/164ba01bc20eaca766cd2e57bb61fc917642c3a5_1697457523.jpg',
    isDeleted: false,
  },
];

export default function HomeProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: 'rtl',
    containScroll: 'trimSnaps',
    slidesToScroll: 2,
  });

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return (
    <div className="overflow-hidden relative px-6">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {products.map((product, index) => (
            <div className="relative min-w-0 flex-[0_0_25%]" key={index}>
              <div className="relative overflow-hidden p-5">
                <Link href={`/shop/${product.slug}`} className={'flex gap-5'}>
                  <ProductItem {...product} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute  active:scale-95 top-1/2 right-0 transform -translate-y-1/2 bg-bg_low py-3 p-1 rounded-full pointer-events-auto"
        onClick={scrollPrev}
      >
        <HiMiniChevronRight size={20} />
      </button>
      <button
        className="absolute active:scale-95 top-1/2 left-0 transform -translate-y-1/2 bg-bg_low py-3 p-1 rounded-full   pointer-events-auto"
        onClick={scrollNext}
      >
        <HiMiniChevronLeft size={20} />
      </button>
    </div>
  );
}
