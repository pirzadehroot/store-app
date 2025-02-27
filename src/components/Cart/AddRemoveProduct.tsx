"use client";
import { HiOutlineTrash } from "react-icons/hi2";
import useCartStore from "../../store/useCartStore";
import { IProductType } from "../Product/ProductItem";

export default function AddRemoveProduct(item: IProductType) {
  const { cart, addToCart, removeFromCart } = useCartStore();

  return (
    <div className="flex gap-2 items-center my-5">
      <button
        onClick={() => addToCart(item)}
        className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white"
      >
        +
      </button>
      <span className="mx-2">{cart.length}</span>
      <button
        onClick={() => removeFromCart(item.id)}
        className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white"
      >
        -
      </button>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 p-2 rounded-lg shadow-lg text-white transition-transform active:scale-90"
      >
        <HiOutlineTrash size={25} />
      </button>
    </div>
  );
}
