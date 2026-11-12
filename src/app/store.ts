import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import favouritesReducer from './favouritesSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('shop_cart', JSON.stringify(state.cart));
  localStorage.setItem('shop_favourites', JSON.stringify(state.favourites));
});
