import { configureStore } from '@reduxjs/toolkit';
import { fetchProducts, productsSlice } from './productsSlice';

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

store.dispatch(fetchProducts());

export default store;
