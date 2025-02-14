import React from "react";
import { HiMiniShoppingCart, HiStar } from "react-icons/hi2";
import Image from "next/image";

export interface IProductType {
  id: string;
  image: string;
  title: string;
  rating: number;
  price: number;
  description: string;
}

export default function ProductItem(product: IProductType) {
  return (
    <div className="rounded-lg p-3 shadow-xl border-2 bg-white">
      <Image
        className="rounded-md shadow-sm items-center"
        src={product?.image}
        alt="s"
        width={500}
        height={600}
      />
      <div className="flex justify-between items-center">
        <h3 className="text-xl my-3">{product?.title}</h3>
        <span className="flex">
          {Array.from({ length: product?.rating || 0 }, (_, index) => (
            <span key={index}>
              <HiStar size={20} className="text-yellow-500" />
            </span>
          ))}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-red-500">
          تومان {product?.price}
        </span>
        <span>
          <HiMiniShoppingCart
            size={35}
            className="border-2 text-red-500 rounded-lg p-1 cursor-pointer hover:scale-110 transition-transform"
          />
        </span>
      </div>
    </div>
  );
}
