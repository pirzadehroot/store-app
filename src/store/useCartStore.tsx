"use client";
import { create } from "zustand";

// 🛒 نوع محصول
interface ICartType {
  id: number;
  name: string;
  qty: number;
}

// 🎯 نوع استور Zustand
interface CartState {
  cart: ICartType[];
  addToCart: (product: ICartType) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

// 📦 دریافت اطلاعات ذخیره شده از localStorage (برای جلوگیری از خطای SSR)
const getCartFromStorage = (): ICartType[] => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

// 📌 ذخیره سبد خرید در localStorage
const saveCartToStorage = (cart: ICartType[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

// 🔥 استور Zustand برای سبد خرید
const useCartStore = create<CartState>((set) => ({
  cart: getCartFromStorage(), // مقدار اولیه از localStorage

  addToCart: (product) =>
    set((state) => {
      const updatedCart = [...state.cart, product];
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () =>
    set(() => {
      saveCartToStorage([]);
      return { cart: [] };
    }),
}));

export default useCartStore;
