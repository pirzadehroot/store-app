import Image from 'next/image';
import image1 from '@/assets/images/PAT/1.png';
import image2 from '@/assets/images/PAT/2.png';
import image3 from '@/assets/images/PAT/3.png';
import image4 from '@/assets/images/PAT/4.png';
const data = [
  {
    id: '1',
    imageUrl: image1,
    title: '!قرعه کشی ماهانه',
    description: 'هر خرید یک شانس بیشتر',
  },
  {
    id: '2',
    imageUrl: image2,
    title: 'از تخفیف ها جا نمون!',
    description: 'زمان های تخفیف بهت خبر میدیم',
  },
  {
    id: '3',
    imageUrl: image3,
    title: 'نظرت برامون مهمه!',
    description: 'نظرت رو در مورد کالاها بنویس',
  },
  {
    id: '4',
    imageUrl: image4,
    title: 'جیم مثل جت!',
    description: 'با جیم همون ساعت دستته!',
  },
];

export default function Process_of_Appropriate_Transfer() {
  return (
    <div className="grid grid-cols-12 justify-between gap-10">
      {data.map((item) => (
        <div
        className="flex col-span-3 max-lg:col-span-6 max-sm:col-span-12 max-xl:gap-3 gap-10 justify-between items-center border border-border bg-bg_low rounded-xl p-4"
        key={item.id}
        >
          <span className={'flex-col gap-2'}>
            <h4 className="font-bold">{item.title}</h4>
            <span className="text-low text-sm">{item.description}</span>
          </span>
          <Image src={item.imageUrl} alt={item.title} width={50} height={50} />
        </div>
      ))}
    </div>
  );
}
