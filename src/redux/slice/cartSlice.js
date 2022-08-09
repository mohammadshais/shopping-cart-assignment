import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        const items = state.cartItems.map((itm) => {
          if (itm.id === action.payload.id) {
            return { ...itm, quantity: (itm.quantity += 1) };
          } else {
            return itm;
          }
        });
        state.cartItems = items;
        return;
      }
      state.cartItems = [
        ...state.cartItems,
        { ...action.payload, quantity: 1 },
      ];
    },
    removeFromCart: (state, action) => {
      if (action.payload.quantity > 1) {
        const items = state.cartItems.map((itm) =>
          itm.id === action.payload.id
            ? { ...itm, quantity: --itm.quantity }
            : itm
        );
        state.cartItems = items;
        return;
      }
      const items = state.cartItems.filter(
        (itm) => itm.id !== action.payload.id
      );
      state.cartItems = items;
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
