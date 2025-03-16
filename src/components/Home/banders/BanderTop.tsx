import Image from 'next/image';
import Image1 from '@/assets/images/banders/main-banner-1.png';
import Image2 from '@/assets/images/banders/main-banner-2.png';

const bander_1 = {
  id: '1',
  src: Image1,
  alt: 'image bander 1',
};

const bander_2 = {
  id: '2',
  src: Image2,
  alt: 'image bander 2',
};

export default function BanderTop() {
  return (
    <div className={'grid grid-cols-12 gap-10'}>
      <div className="col-span-6 max-lg:col-span-12">
        <Image
          src={bander_1.src}
          alt={bander_1.alt}
          width={828}
          height={241}
          priority
        />
      </div>
      <div className="col-span-6 max-lg:col-span-12 -mb-3">
        <Image
          src={bander_2.src}
          alt={bander_2.alt}
          width={828}
          height={241}
          priority
        />
      </div>
    </div>
  );
}
