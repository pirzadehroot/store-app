import Link from 'next/link';
import type { Metadata } from 'next';
import axios from 'axios';
import ShopFilter from '../../../components/Shop/filters/ProductTopFilter';
import ProductFilter from '../../../components/Shop/filters/ProductFilter';
import ShopPagination from '../../../components/Shop/ShopPagination';
import PageRouter from '../../../components/Router/PageRouter';
import { ProductDto } from '../../../components/Product/dto/product.dto';
import ProductItem from '../../../components/Product/ProductItem';

export const metadata: Metadata = {
  title: 'فروشگاه',
  description: 'صفحه محصولات فروشگاه',
};

export default async function Shop() {
  const data = await axios.get('http://localhost:8000/shop');
  const products = data.data as ProductDto[];

  const routerList = [{ route_title: 'فروشگاه', route_link: '/shop' }];
  return (
    <div className="container mx-auto py-10">
      <PageRouter routerList={routerList} />
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-2 max-xl:col-span-3 max-lg:hidden">
          <ProductFilter isForMobile={false} />
        </div>
        <div className="col-span-10 max-lg:col-span-12 max-xl:col-span-9">
          <ShopFilter />
          <div className={'flex justify-between mb-5 px-2'}>
            <span>همه کالا های دسته بندی مبایل</span>
            <span>120 کالا</span>
          </div>
          <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {products &&
              products.map((product, index) => (
                <Link href={`shop/${product.slug}`} key={index}>
                  {/* <ProductItem {...product} /> */}
                </Link>
              ))}
          </div>
          <ShopPagination />
        </div>
      </div>
    </div>
  );
}
