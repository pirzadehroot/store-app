import { create } from "zustand";
import { persist } from "zustand/middleware";

type ICartType = {
  id: string;
  qty: number;
};

interface CartStore {
  cartItems: ICartType[];
  showCartQty: () => number;
  addProduct: (id: string) => void;
  showCart: () => ICartType[];
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cartItems: [],
      showCartQty: () => get().cartItems.length,
      showCart: () => get().cartItems,
      addProduct: (id: string) =>
        set((state) => {
          const exists = state.cartItems.some((item) => item.id === id);
          return {
            cartItems: exists
              ? state.cartItems.map((item) =>
                  item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
              : [...state.cartItems, { id, qty: 1 }],
          };
        }),
    }),
    { name: "cart-storage" }
  )
);
