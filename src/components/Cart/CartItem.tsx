import Image from "next/image";
import React from "react";
import AddRemoveProduct from "./AddRemoveProduct";
import { IProductType } from "../Product/ProductItem";

export default function CartItem(item: IProductType) {
  return (
    <div className="flex gap-4 justify-between p-2 rounded-lg">
      <div className="flex gap-5">
        <Image
          src={item.image}
          alt="cart_alt_img"
          className=""
          width={200}
          height={100}
        />
        <div>
          <h2 className="text-lg mb-5">{item.title}</h2>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-lg font-bold text-red-600">
          تومان {item.price}
        </span>
        <AddRemoveProduct item={item} />
      </div>
    </div>
  );
}
