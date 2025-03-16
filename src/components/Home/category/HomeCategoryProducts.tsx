import img_1 from '@/assets/images/homeCat/cat-1.svg';
import img_2 from '@/assets/images/homeCat/cat-2.svg';
import img_3 from '@/assets/images/homeCat/cat-3.svg';
import img_4 from '@/assets/images/homeCat/cat-4.svg';
import img_5 from '@/assets/images/homeCat/cat-5.svg';
import img_6 from '@/assets/images/homeCat/cat-6.svg';
import img_7 from '@/assets/images/homeCat/cat-7.svg';
import img_8 from '@/assets/images/homeCat/cat-8.svg';
import img_9 from '@/assets/images/homeCat/cat-9.svg';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: '1',
    title: 'دسته بندی 1',
    slug: 'category_1',
    icon: img_1,
  },
  {
    id: '2',
    title: 'دسته بندی 2',
    slug: 'category_2',
    icon: img_2,
  },
  {
    id: '3',
    title: 'دسته بندی 3',
    slug: 'category_3',
    icon: img_3,
  },
  {
    id: '4',
    title: 'دسته بندی 4',
    slug: 'category_4',
    icon: img_4,
  },
  {
    id: '5',
    title: 'دسته بندی 5',
    slug: 'category_5',
    icon: img_5,
  },
  {
    id: '6',
    title: 'دسته بندی 6',
    slug: 'category_6',
    icon: img_6,
  },
  {
    id: '7',
    title: 'دسته بندی 7',
    slug: 'category_7',
    icon: img_7,
  },
  {
    id: '8',
    title: 'دسته بندی 8',
    slug: 'category_8',
    icon: img_8,
  },
  {
    id: '9',
    title: 'دسته بندی 9',
    slug: 'category_9',
    icon: img_9,
  },
];

export default function HomeCategoryProducts() {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {categories.map((cat) => (
        <Link key={cat.id} href={`/shop/${cat.slug}`}>
          <div className="items-center border-2 border-border hover:border-red-500 transition-colors p-2 rounded-lg flex gap-2 max-sm:flex-col">
            <Image src={cat.icon} alt={cat.title} width={40} height={40} />
            <span>{cat.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
