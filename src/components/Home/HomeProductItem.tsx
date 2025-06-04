import Image from 'next/image';
import React from 'react';
import { FaPercent, FaTag } from 'react-icons/fa6';
import { MdOutlineDiscount } from 'react-icons/md';

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
    <div className="relative min-w-full px-1">
      <div className="rounded-3xl border-2 border-border bg-bg text-center items-center h-[400px]">
        {product?.discount > 0 && (
          <div
            className="absolute flex top-3 right-4 rounded-xl pt-1 px-2 mx-auto bg-red-500 text-white"
            title={`تخفیف: ${product?.discount}%`}
          >
            <FaPercent className="ml-0.5" size={17} />
            <span>{product?.discount}</span>
          </div>
        )}
        <Image
          src={product?.imageUrl}
          alt={product?.title}
          width={1000}
          height={1000}
          className="w-full max-w-[220px] h-auto mx-auto my-4 rounded-xl"
        />
        <div className="grid gap-4">
          <div className="pb-2 pt-2 text-xl">{product?.title}</div>
          <div className="text-lg flex justify-center gap-2 items-center">
            <div className="font-bold text-red-500">
              {product?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            تومان
          </div>
        </div>
      </div>
    </div>
  );
}
