import PageRouter from '@/components/Router/PageRouter';
import ProductFilter from '@/components/Shop/filters/ProductFilter';
import ShopPagination from '@/components/Shop/ShopPagination';
import ShopFilter from '@/components/Shop/filters/ProductTopFilter';

export const metadata: Metadata = {
  title: 'دسته بندی فلان',
  description: 'صفحه محصولات فروشگاه',
};

export default function Categories() {
  return (
    <div className="container mx-auto py-8">
      <PageRouter
        routerList={[{ route_title: 'فروشگاه', route_link: '/shop' }]}
      />
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-2 max-xl:col-span-3 max-lg:hidden">
          <ProductFilter isForMobile={false} />
        </div>
        <div className="col-span-10 max-lg:col-span-12 max-xl:col-span-9">
          <ShopFilter />
          <div className={'flex justify-between mb-5 px-2'}>
            <span>همه کالا های دسته بندی فلان , بهمان , بیسار</span>
            <span>120 کالا</span>
          </div>
          <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {/* {products &&
                products.map((product, index) => (
                  <Link
                    href={`shop/${product.category.slug}/${product.slug}`}
                    key={index}
                  >
                    <ProductItem {...product} />
                  </Link>
                ))} */}
          </div>
          <ShopPagination />
        </div>
      </div>
    </div>
  );
}
