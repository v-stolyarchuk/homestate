import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '../types';

const loadFavourites = () => {
  try {
    const saved = localStorage.getItem('shop_favourites');
    return saved ? JSON.parse(saved) : { items: [] as Product[] };
  } catch {
    return { items: [] as Product[] };
  }
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: loadFavourites(),
  reducers: {
    addToFavourites(state, action) {
      const existingItem = state.items.find(
        (item: Product) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromFavourites(state, action) {
      state.items = state.items.filter(
        (item: Product) => item.id !== action.payload
      );
    },
    toggleFavourite(state, action) {
      const existingItem = state.items.find(
        (item: Product) => item.id === action.payload.id
      );
      if (existingItem) {
        state.items = state.items.filter(
          (item: Product) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
    clearFavourites(state) {
      state.items = [];
    },
  },
});

export const {
  addToFavourites,
  removeFromFavourites,
  toggleFavourite,
  clearFavourites,
} = favouritesSlice.actions;
export default favouritesSlice.reducer;
