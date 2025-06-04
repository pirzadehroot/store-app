'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import Image from 'next/image';
import YellowImage from './Hero-Yellow-min-1.png';
import RedImage from './Hero-Red.png';
import PurpleImage from './Hero-Purple-min-1.png';
import { HiMiniChevronRight, HiMiniChevronLeft } from 'react-icons/hi2';
import { DotButton, useDotButton } from './DotButton';

const slides = [
  { image: YellowImage },
  { image: RedImage },
  { image: PurpleImage },
];

export default function MainBander() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: 'rtl' },
    [Autoplay({ delay: 15000 }), Fade()]
  );

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
    <div className="overflow-hidden relative">
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
              <div className="relative overflow-hidden h-[400px]">
                <Image
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover rounded-3xl border-2"
                  src={slide.image}
                  width={2727}
                  height={1200}
                  alt={`Slide ${index + 1}`}
                  priority
                />
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
              defaultStyle={'bg-gray-100'}
              key={`dot-${index}`}
              isActive={selectedIndex === index}
              onClick={() => onDotButtonClick(index)}
            ></DotButton>
          ))}
        </div>
      </div>

      <button
        className="absolute active:scale-95 top-1/2 right-2 transform -translate-y-1/2 bg-bg_low p-0.5 py-3 shadow-md rounded-full pointer-events-auto"
        onClick={scrollPrev}
      >
        <HiMiniChevronRight size={20} />
      </button>

      <button
        className="absolute active:scale-95 top-1/2 left-2 transform -translate-y-1/2 bg-bg_low p-0.5 py-3 shadow-md rounded-full pointer-events-auto"
        onClick={scrollNext}
      >
        <HiMiniChevronLeft size={20} />
      </button>
    </div>
  );
}
