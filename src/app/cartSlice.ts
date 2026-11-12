import { createSlice } from '@reduxjs/toolkit';
import type { CartItem } from '../types';

const loadCart = () => {
  try {
    const saved = localStorage.getItem('shop_cart');
    return saved ? JSON.parse(saved) : { items: [] as CartItem[] };
  } catch {
    return { items: [] as CartItem[] };
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCart(),
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item: CartItem) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity(state, action) {
      const existingItem = state.items.find(
        (item: CartItem) => item.id === action.payload
      );
      if (!existingItem) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item: CartItem) => item.id !== action.payload
        );
      } else {
        existingItem.quantity -= 1;
      }
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item: CartItem) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, decrementQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
