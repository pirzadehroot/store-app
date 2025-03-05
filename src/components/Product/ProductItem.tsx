import React from "react";
import Image from "next/image";

export interface IProductType {
  id: number;
  image: string;
  title: string;
  rating: number;
  price: number;
  description: string;
}

export default function ProductItem(product: IProductType) {
  return (
    <>
      <div className="max-sm:hidden rounded-2xl p-3 border-2 group hover:border-red-500 transition-colors duration-200 dark:hover:border-red-500 dark:border-gray-600">
        <div className=" px-8 py-6">
          <Image
            className="rounded-lg"
            src={product?.image}
            alt="s"
            width={500}
            height={600}
          />
        </div>
        <h3 className="text-xl mb-4 text-center">{product?.title}</h3>
        <div className="flex justify-between items-center border-t-2 py-5 border-gray-200 dark:border-gray-600">
          <div className="text-lg flex gap-2 items-center">
            تومان
            <div className="font-bold text-red-500">
              {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <div className="-ml-3">
            <span className="rounded-r-full group-hover:bg-red-500 text-gray-700 bg-gray-200 dark:bg-gray-600 dark:text-gray-100  group-hover:text-white p-2 pr-3 transition-colors duration-200">
              خرید محصول
            </span>
          </div>
        </div>
      </div>

      {/* mobile size */}
      <div className="md:hidden grid grid-cols-12 rounded-lg p-1 gap-3 border items-center dark:border-gray-600">
        <div className="p-1 col-span-4">
          <Image
            className="rounded-lg"
            src={product?.image}
            alt="s"
            width={500}
            height={600}
          />
        </div>
        <div className="col-span-8">
          <h3 className="text-base">{product?.title}</h3>
          <div className="text-base flex my-3 gap-2 items-center">
            تومان
            <div className="font-bold text-red-500">
              {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </div>
          </div>
          <span className="rounded-lg bg-red-500 text-white p-1 px-2">
            خرید محصول
          </span>
        </div>
      </div>
    </>
  );
}
