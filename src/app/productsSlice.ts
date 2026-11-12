import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/productsLocal.json';

const initialState = {
  items: productsData,
  selectedCategory: 'all',
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    // На майбутнє: сюди можна буде додати редюсер setProducts(state, action)
  },
});

export const { setCategory } = productsSlice.actions;
export default productsSlice.reducer;
