"use client";
import { HiOutlineTrash } from "react-icons/hi2";
import { useCartStore } from "../../context/CartContext";

interface IIdProduct {
  id: string;
}

export default function AddRemoveProduct({ id }: IIdProduct) {
  const { handelAddProduct } = useCartContext();

  return (
    <div className="flex gap-2 items-center my-5">
      <button
        onClick={() => handelAddProduct(id)}
        className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white"
      >
        +
      </button>
      <span className="mx-2">2</span>
      <button className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white">
        -
      </button>
      <button className="bg-red-500 p-2 rounded-lg shadow-lg text-white transition-transform active:scale-90">
        <HiOutlineTrash size={25} />
      </button>
    </div>
  );
}
