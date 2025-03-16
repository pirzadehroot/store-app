import React from 'react';
import Image from 'next/image';
import { ProductDto } from './dto/product.dto';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

export default function ProductItem(product: ProductDto) {
  return (
    <div className="relative rounded-2xl p-3 border-2 border-border group transition-colors duration-200 hover:border-red-500 max-sm:grid max-sm:grid-cols-12 max-sm:rounded-lg max-sm:p-2 max-sm:gap-5 max-sm:items-center">
      {product.discount && (
        <span className="absolute top-3 right-0 p-0.5 items-center px-2 bg-red-500 text-white rounded-l-lg">
          {product?.discount}
          %
        </span>
      )}
      <div className="p-4 max-sm:p-1 max-sm:col-span-4">
        <Image
          className="rounded-lg"
          src={product?.imageUrl}
          alt={product?.title}
          width={500}
          height={600}
        />
      </div>
      <h3 className="text-xl mb-4 text-center max-sm:text-base max-sm:col-span-8 max-sm:text-left">
        {product?.title}
      </h3>
      <div className="flex justify-between items-center border-t-2 py-5 border-border max-sm:border-t-0 max-sm:col-span-8">
        <div className="text-lg flex gap-2 items-center max-sm:text-base">
          <div className="font-bold text-red-500">
            {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          تومان
        </div>
        <div className="-ml-3 px-4 py-1 rounded-r-full group-hover:bg-red-500 bg-border group-hover:text-white transition-colors duration-100 max-sm:ml-0 max-sm:px-2 max-sm:py-1 max-sm:rounded-lg max-sm:flex max-sm:gap-2 max-sm:items-center max-sm:bg-red-500 max-sm:text-white">
          <HiOutlineShoppingCart size={30} />
          <span className="max-sm:inline hidden">خرید محصول</span>
        </div>
      </div>
    </div>
  );
}
