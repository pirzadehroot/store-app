import Image from 'next/image';
import article_img_1 from '@/assets/images/articles/article (1).jpg';
import article_img_2 from '@/assets/images/articles/article (2).jpg';
import article_img_3 from '@/assets/images/articles/article (3).jpg';
import article_img_4 from '@/assets/images/articles/article (4).jpg';
import { IoIosTimer } from 'react-icons/io';

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
    <div className="space-y-5">
      {articles.map((article) => (
        <div
          key={article.id}
          className="flex gap-5 border-2 rounded-xl border-border"
        >
          <Image
            className="rounded-r-xl"
            src={article.img}
            alt={'img alt'}
            width={200}
            height={100}
            priority
          />
          <div className="p-2 space-y-5">
            <h4>{article.title}</h4>
            <span className="flex gap-1 items-center">
              <IoIosTimer />
              {article.datetime}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
