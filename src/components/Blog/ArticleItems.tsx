import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

interface IArticleType {
  slug: string;
  title: string;
  category: ArticleCategory;
  image: string;
  reading_time: number;
}

interface ArticleCategory {
  url: string;
  title: string;
}

export default function ArticleItems({
  slug,
  title,
  category,
  image,
  reading_time,
}: IArticleType) {
  return (
    <div className="rounded-lg border-2 border-gray-200 dark:border-slate-500  ">
      <div className="relative">
        <Image
          src={image}
          alt={"article"}
          className="rounded-t-lg"
          width={400}
          height={200}
        />
        <Link
          href={category?.url || "/"}
          className="absolute right-3 bottom-2 rounded-md text-sm bg-red-500 p-2 text-white"
        >
          {category?.title}
        </Link>
      </div>
      <div className="p-2">
        <h3 className="my-4 pb-2 border-b-2 text-lg border-gray-300 dark:border-gray-110">
          {title}
        </h3>
        <div className="flex justify-between text-sm items-center">
          <span> زمان مطاله : {reading_time}</span>
          <Link
            href={`/blog/${slug}`}
            className="rounded-r-full hover:pl-10 p-2.5 pr-5 -ml-2 bg-gray-200 dark:bg-gray-750  dark:hover:bg-red-500 hover:bg-red-500 hover:text-white transition-all "
          >
            <FaArrowLeft size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
