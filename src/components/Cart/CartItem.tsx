import Image from "next/image";
import React from "react";
import AddRemoveProduct from "./AddRemoveProduct";
import { HiStar } from "react-icons/hi2";
import { IProductType } from "../Product/ProductItem";

export default function CartItem(item: IProductType) {
  return (
    <div className="flex gap-4 justify-between p-2 rounded-lg">
      <div className="flex gap-5">
        <Image
          src={item.image}
          alt="cart_alt_img"
          className="rounded-lg shadow-lg border-2"
          width={200}
          height={100}
        />
        <div>
          <h2 className="text-lg mb-5">{item.title}</h2>
          <span className="flex">
            {Array.from({ length: item.rating || 0 }, (_, index) => (
              <span key={index}>
                <HiStar size={20} className="text-yellow-500" />
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-lg font-bold text-red-600">
          تومان {item.price}
        </span>
        <AddRemoveProduct id={item.id} />
      </div>
    </div>
  );
}
