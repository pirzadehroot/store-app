import { create } from 'zustand';

type CounterStateDto = {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStateDto>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));
