import Image from 'next/image';
import React from 'react';

interface HomeProductDto {
  product: {
    id: string;
    discount: number;
    imageUrl: string;
    title: string;
    price: number;
  };
}

export default function HomeProductItem({ product }: HomeProductDto) {
  return (
    <div className="relative min-w-full  px-1">
      <div className=" rounded-3xl border-2 border-border bg-bg text-center items-center h-[400px]">
        {product.discount && (
          <div className="rounded-b-lg py-1 w-3/4 -mt-1 mx-auto bg-red-500 text-white">
            {product?.discount}% تخفیف
          </div>
        )}
        <Image
          src={product?.imageUrl}
          alt={product?.title}
          width={1000}
          height={1000}
          className="w-full max-w-[220px] h-auto mx-auto my-4 rounded-xl"
        />
        <div className="pb-2 text-lg">{product?.title}</div>
        <div className="text-lg flex justify-center gap-2 items-center">
          <div className="font-bold text-red-500">
            {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          تومان
        </div>
      </div>
    </div>
  );
}
