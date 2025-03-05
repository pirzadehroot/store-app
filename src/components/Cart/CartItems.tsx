import React from "react";
import CartItem from "./CartItem";
import useCartStore from "../../store/useCartStore";

export default function CartItems() {
  const { cart } = useCartStore();

  return (
    <div className="p-5">
      {!cart ? (
        <p>هیج محصولی در سبد خرید وجود ندارد.</p>
      ) : (
        cart.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem item={cartItem} />
          </div>
        ))
      )}
    </div>
  );
}
