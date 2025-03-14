'use client';
import Image from 'next/image';
import productImage from './product-1.jpg';
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import { DotButton, useDotButton } from './DotButton';

export default function ProductDiscount() {
  const data = [
    {
      imageUrl: productImage,
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: '55',
      id: 1,
    },
    {
      imageUrl: productImage,
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: '25',
      id: 2,
    },
    {
      imageUrl: productImage,
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: '33',
      id: 3,
    },
    {
      imageUrl: productImage,
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: '25',
      id: 4,
    },
    {
      imageUrl: productImage,
      title: 'ماشین فلانی بهمانی 12',
      price: 35523000,
      discount: '11',
      id: 5,
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
        <div className="flex">
          {data.map((productDiscount) => (
            <div
              key={productDiscount.id}
              className="relative min-w-full h-[400px] rounded-3xl border-2 border-border bg-bg text-center items-center"
            >
              <div className="rounded-b-lg py-1 w-3/4 -mt-1 mx-auto bg-red-500 text-white">
                {productDiscount?.discount}% تخفیف
              </div>
              <Image
                src={productDiscount?.imageUrl}
                alt={productDiscount?.title}
                className="w-full max-w-[220px] h-auto mx-auto my-4 rounded-xl"
              />
              <div className="pb-2 text-lg">{productDiscount?.title}</div>
              <div className="text-lg flex justify-center gap-2 items-center">
                تومان
                <div className="font-bold text-red-500">
                  {productDiscount?.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex justify-center gap-1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              isActiveStyle={'bg-red-500 px-3 text-white animate-jump-in'}
              defaultStyle={'border-2 border-border '}
              key={`dot-${index}`}
              isActive={selectedIndex === index}
              onClick={() => onDotButtonClick(index)}
            ></DotButton>
          ))}
        </div>
      </div>

      <button
        className="absolute text-low bottom-4 left-4"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      >
        <HiMiniChevronLeft size={30} />
      </button>

      <button
        className="absolute text-low bottom-4 right-4"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      >
        <HiMiniChevronRight size={30} />
      </button>
    </div>
  );
}
