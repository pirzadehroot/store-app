"use client";
import { create } from "zustand";

type ICartType = {
  id: string;
  qty: number;
};

type CartStore = {
  cartItems: ICartType[];
  ShowCartQty: number;
  ShowCart: ICartType[];
  productByIdQty: (id: string) => number;
  handelAddProduct: (id: string) => void;
};

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  
  ShowCartQty: 0,

  ShowCart: [],

  productByIdQty: (id) => {
    return get().cartItems.find((item) => item.id === id)?.qty || 0;
  },

  handelAddProduct: (id) => {
    set((state) => {
      const itemExists = state.cartItems.find((item) => item.id === id);
      const newCartItems = itemExists
        ? state.cartItems.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...state.cartItems, { id, qty: 1 }];

      return {
        cartItems: newCartItems,
        ShowCartQty: newCartItems.reduce((total, item) => total + item.qty, 0),
        ShowCart: newCartItems,
      };
    });
  },
}));
