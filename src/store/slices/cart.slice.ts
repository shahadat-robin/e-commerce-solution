import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;
      //   const existing = state.items.find((i) => i.id === item.id);

      //   if (existing) {
      //     existing.quantity += 1;
      //   } else {
      //     state.items.push({ ...item, quantity: 1 });
      //   }

      state.totalPrice += item.price;
    },

    removeItem(state, action) {
      const id = action.payload;
      //   const existing = state.items.find((i) => i.id === id);

      //   if (existing) {
      //     state.totalQuantity -= 1;
      //     state.totalPrice -= existing.price;

      //     if (existing.quantity === 1) {
      //       state.items = state.items.filter((i) => i.id !== id);
      //     } else {
      //       existing.quantity -= 1;
      //     }
      //   }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
