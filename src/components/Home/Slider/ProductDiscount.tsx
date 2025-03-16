'use client';
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './DotButton';
import HomeProductItem from '../HomeProductItem';

export default function ProductDiscount() {
  const discountProduct = [
    {
      id: '1',
      imageUrl:
        'https://dkstatics-public.digikala.com/digikala-products/715648.jpg',
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: 55,
    },
    {
      imageUrl:
        'https://dkstatics-public.digikala.com/digikala-products/715648.jpg',
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: 25,
      id: '2',
    },
    {
      imageUrl:
        'https://dkstatics-public.digikala.com/digikala-products/715648.jpg',
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: 33,
      id: '3',
    },
    {
      imageUrl:
        'https://dkstatics-public.digikala.com/digikala-products/715648.jpg',
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: 25,
      id: '4',
    },
    {
      imageUrl:
        'https://dkstatics-public.digikala.com/digikala-products/715648.jpg',
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: 11,
      id: '5',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: 'rtl' },
    [Autoplay({ delay: 5000 })]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="overflow-hidden relative">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex ">
          {discountProduct.map((product) => (
            <HomeProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center gap-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              isActiveStyle={'bg-red-500 px-3 text-white animate-jump-in'}
              defaultStyle={'border-2 border-border'}
              key={`dot-${index}`}
              isActive={selectedIndex === index}
              onClick={() => onDotButtonClick(index)}
            ></DotButton>
          ))}
        </div>
      </div>

      <button
        className="absolute text-low bottom-4 right-4"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <HiMiniChevronRight size={30} />
      </button>

      <button
        className="absolute text-low bottom-4 left-4"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <HiMiniChevronLeft size={30} />
      </button>
    </div>
  );
}
