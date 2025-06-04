import Image from 'next/image';
import article_img_1 from '@/assets/images/articles/article (1).jpg';
import article_img_2 from '@/assets/images/articles/article (2).jpg';
import article_img_3 from '@/assets/images/articles/article (3).jpg';
import article_img_4 from '@/assets/images/articles/article (4).jpg';
import { IoTimeOutline } from 'react-icons/io5';
import Link from 'next/link';

const articles = [
  {
    id: '1',
    title: 'رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود',
    img: article_img_1,
    datetime: '22 فروردین',
  },
  {
    id: '2',
    title: 'رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود',
    img: article_img_2,
    datetime: '22 فروردین',
  },
  {
    id: '3',
    title: 'رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود',
    img: article_img_3,
    datetime: '22 فروردین',
  },
  {
    id: '4',
    title: 'رویداد رونمایی از سرفیس‌ها در تاریخ ۲۰ مهر برگزار می‌شود',
    img: article_img_4,
    datetime: '22 فروردین',
  },
];

export default function HomeArticles() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {articles.map((article) => (
        <Link
          className="grid col-span-3 bg-bg_low rounded-xl  hover:scale-95 transition-all shadow-lg relative"
          key={article.id}
          href={`/blog/${article.title}`}
        >
          <Image
            className="rounded-t-xl"
            src={article.img}
            alt={'img alt'}
            width={500}
            height={500}
            priority
          />
          <div className="flex text-center justify-between p-2 border-t-0 space-y-5 border-2 border-border rounded-b-xl">
            <h4>{article.title}</h4>
            <span className="absolute -top-2 right-3 bg-red-500 text-white rounded-lg p-1 flex gap-1">
              <IoTimeOutline size={20} />
              {article.datetime}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
