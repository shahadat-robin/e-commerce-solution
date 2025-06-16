import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  productId: string | number;
  quantity: number;
}

const getInitialCart = (): ICartItem[] => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return [];
      }
    }
  }
  return [];
};

const initialState: ICartItem[] = getInitialCart();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<ICartItem>) => {
      const existing = state.find((i) => i.productId === payload.productId);

      if (existing) {
        existing.quantity = existing.quantity + payload.quantity;
      } else {
        state.push(payload);
      }
    },

    quantityAdjust: (state, { payload }: PayloadAction<ICartItem>) => {
      state = state.map((item) => {
        if (item.productId === payload.productId) {
          return { ...item, quantity: payload.quantity };
        }
        return item;
      });

      return state;
    },

    removeFromCart: (state, { payload }: PayloadAction<string | number>) => {
      state = state.filter((i) => i.productId !== payload);
      return state;
    },

    clearCart: (state) => {
      state = [];
    },
  },
});

export const { addToCart, quantityAdjust, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
export type { ICartItem };
