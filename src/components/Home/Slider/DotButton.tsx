import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { EmblaCarouselType } from 'embla-carousel';

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onInit = (emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const onSelect = (emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type DotButtonProps = ComponentPropsWithRef<'button'> & {
  isActive?: boolean;
  isActiveStyle: string;
  defaultStyle: string;
};

export const DotButton: React.FC<DotButtonProps> = ({
  isActive = false,
  isActiveStyle,
  defaultStyle,
  ...restProps
}) => {
  const buttonClass = isActive ? isActiveStyle : defaultStyle;

  return (
    <button
      type="button"
      className={`rounded-full p-1 ${buttonClass}`}
      {...restProps}
    ></button>
  );
};
