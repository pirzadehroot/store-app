import axios from 'axios';
import BlogHeader from '../../../components/Blog/BlogHeader';
import { Metadata } from 'next';

// async function articleData() {
//   const { data } = await axios('http://localhost:8001/articles');
//   return data;
// }

// export async function generateMetadata(): Promise<Metadata> {
//   // const article = await articleData();
//   return {
//     title: article?.title,
//     description: article?.description,
//   };
// }

export default async function Blog() {
  // const { data } = await axios('http://localhost:8001/articles');

  return (
    <div>
      {/* <BlogHeader /> */}
      <div className="my-20">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl">آخرین مقالات</h2>
            <span className="text-gray-500 dark:text-gray-300">23 مقاله</span>
          </div>
          <div className="grid grid-cols-4 gap-10">
            {/* {data.map((article, index) => (
              <ArticleItems key={index} {...article} />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
