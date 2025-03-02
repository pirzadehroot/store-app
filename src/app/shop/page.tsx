import Link from "next/link";
import type { Metadata } from "next";
import axios from "axios";
import ProductItem, {
  IProductType,
} from "../../components/Product/ProductItem";
import ShopFilter from "../../components/Shop/PrroductTopFilter";
import ProductFilter from "../../components/Shop/ProductFilter";
import ShopPagination from "../../components/Shop/ShopPagination";
import PageRouter from "../../components/Router/PageRouter";

export const metadata: Metadata = {
  title: "محصولات",
  description: "صفحه محصولات فروشگاه",
};

export default async function Shop() {
  const data = await axios.get("http://localhost:8001/products");
  const products = (await data.data) as IProductType[];

  const route = [
    { route_title: "دسته بندی", route_link: "/" },
    { route_title: "دسته بندی", route_link: "/" },
  ];
  return (
    <div className="container mx-auto">
      <PageRouter routerList={route} />
      <div className="grid grid-cols-12 gap-10 max-xl:text-sm">
        <div className="col-span-2 max-xl:col-span-3 max-lg:hidden">
          <ProductFilter isForMobile={false} />
        </div>
        <div className="col-span-10 max-lg:col-span-12 max-xl:col-span-9 ">
          <ShopFilter />
          <div className={"flex justify-between mb-5 px-2"}>
            <span>همه کالا های دسته بندی مبایل</span>
            <span>120 کالا</span>
          </div>
          <div className="grid grid-cols-4 gap-10 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {products &&
              products.map((product, index) => (
                <Link href={`shop/${product.slug}`} key={index}>
                  <ProductItem {...product} />
                </Link>
              ))}
          </div>
          <ShopPagination />
        </div>
      </div>
    </div>
  );
}
