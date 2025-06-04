import Link from 'next/link';
import Process_of_Appropriate_Transfer from '../../../components/Home/Process_of_Appropriate_Transfer';
import MainBander from '../../../components/Home/Slider/MainBander';
import ProductDiscount from '../../../components/Home/Slider/ProductDiscount';
import { FaAngleLeft, FaSquare } from 'react-icons/fa6';
import HomeProducts from '../../../components/Home/HomeProducts';
import HomeCategoryProducts from '../../../components/Home/category/HomeCategoryProducts';
import BanderTop from '../../../components/Home/banders/BanderTop';
import HomeNewProducts from '../../../components/Home/HomeNewProducts';
import BanderDown from '../../../components/Home/banders/BanderDown';
import HomeArticles from '../../../components/Home/HomeArticles';
import HomeBrands from '../../../components/Home/HomeBrands';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <section>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-9 max-lg:col-span-12">
            <MainBander />
          </div>
          <div className="col-span-3 max-lg:col-span-12">
            <ProductDiscount />
          </div>
        </div>
        <div className="py-16">
          <Process_of_Appropriate_Transfer />
        </div>
      </section>

      <section className="pb-10 space-y-10">
        <div className="flex gap-2 justify-between items-center">
          <h2 className="font-bold text-2xl flex gap-2 items-center">
            <FaSquare size={20} className="text-red-500" />
            محصولات پرفروش
          </h2>
          <Link
            href="/shop"
            className="flex gap-2 items-center text-low text-sm hover:text-red-500 transition-colors"
          >
            <span>مشاهده همه</span>
            <FaAngleLeft size={16} />
          </Link>
        </div>
        <div>
          <HomeProducts />
        </div>
      </section>

      <section className="py-10">
        <BanderTop />
      </section>

      <section className="py-10  space-y-10">
        <h2 className="font-bold  text-2xl flex gap-2 items-center">
          <FaSquare size={20} className="text-red-500" />
          دسته بندی محصولات
        </h2>
        <HomeCategoryProducts />
      </section>

      <section className="py-10 space-y-10">
        <h2 className="font-bold  text-2xl flex gap-2 items-center">
          <FaSquare size={20} className="text-red-500" />
          جدید ترین محصولات
        </h2>
        <HomeNewProducts />
      </section>

      <section className="py-10">
        <BanderDown />
      </section>

      <section className="py-10 ">
        <div className="col-span-12 space-y-10">
          <div className="flex justify-between items-center">
            <h2 className="font-bold  text-2xl flex gap-2 items-center">
              <FaSquare size={20} className="text-red-500" />
              مقالات جدید سایت
            </h2>
            <Link
              href="/blog"
              className="flex gap-2 items-center text-low text-sm hover:text-red-500 transition-colors"
            >
              <span>مشاهده همه</span>
              <FaAngleLeft size={16} />
            </Link>
          </div>
          <HomeArticles />
        </div>
      </section>

      <section className="py-10  space-y-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl flex gap-2 items-center">
            <FaSquare size={20} className="text-red-500" />
            برند های فروشگاه
          </h2>
        </div>
        <HomeBrands />
      </section>
    </div>
  );
}
