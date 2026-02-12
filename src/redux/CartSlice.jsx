import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalQuantity++;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem && quantity >= 0) {
        state.totalQuantity =
          state.totalQuantity - existingItem.quantity + quantity;

        existingItem.quantity = quantity;

        if (quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
