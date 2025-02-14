"use client";
import { HiOutlineTrash } from "react-icons/hi2";
<<<<<<< HEAD
import { useCartContext } from "../../context/useCartContext";
=======
import { useCartContext } from "../../context/CartContext";
>>>>>>> 398085c08ae3d2dbfc2cdbe44507f85042665d6a

interface IIdProduct {
  id: string;
}

export default function AddRemoveProduct({ id }: IIdProduct) {
<<<<<<< HEAD
  const { handelAddProduct, productByIdQty } = useCartContext();
=======
  const { handelAddProduct } = useCartContext();
>>>>>>> 398085c08ae3d2dbfc2cdbe44507f85042665d6a

  return (
    <div className="flex gap-2 items-center my-5">
      <button
        onClick={() => handelAddProduct(id)}
        className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white"
      >
        +
      </button>
<<<<<<< HEAD
      <span className="mx-2">{productByIdQty(id as string)}</span>
=======
      <span className="mx-2">2</span>
>>>>>>> 398085c08ae3d2dbfc2cdbe44507f85042665d6a
      <button className="transition-transform active:scale-90 bg-blue-500 rounded-lg shadow-lg p-2 px-4 text-white">
        -
      </button>
      <button className="bg-red-500 p-2 rounded-lg shadow-lg text-white transition-transform active:scale-90">
        <HiOutlineTrash size={25} />
      </button>
    </div>
  );
}
