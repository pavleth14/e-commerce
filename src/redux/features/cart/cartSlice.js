import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, title, price } = action.payload;
      if (!state.items[id]) {
        state.items[id] = { title, price, quantity: 0, total: 0 };
      }
      state.items[id].quantity += 1;
      state.items[id].total += price;
      state.totalQuantity += 1;
      state.totalPrice += price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeOneItem(state, action) {
      const { id } = action.payload;
      if (state.items[id] && state.items[id].quantity > 0) {
        state.items[id].quantity -= 1;
        state.items[id].total -= state.items[id].price;
        state.totalQuantity -= 1;
        state.totalPrice -= state.items[id].price;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeThisItem(state, action) {
      const { id } = action.payload;
      if (state.items[id]) {
        state.totalQuantity -= state.items[id].quantity;
        state.totalPrice -= state.items[id].total;
        delete state.items[id];
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    removeAllItems(state, action) {
        state.items = {};
        state.totalQuantity = 0;
        state.totalPrice = 0;
        localStorage.removeItem('cart');
      },
  },
});

export const { addItem, removeOneItem, removeThisItem, removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;
