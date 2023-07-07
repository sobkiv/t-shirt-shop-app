import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  cart: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'http://localhost:3000/products',
  async () => {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, chosenAmount } = action.payload;
      state.products = state.products.map((p) =>
        p.id === id ? { ...p, count: p.count - chosenAmount } : p
      );
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.chosenAmount += chosenAmount;
      } else {
        state.cart.push({ id, chosenAmount });
      }
    },
    removeFromCart(state, action) {
      const { id, chosenAmount } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.chosenAmount -= chosenAmount;
        if (existingItem.chosenAmount <= 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
          const product = state.products.find((p) => p.id === id);
          if (product) {
            product.count += chosenAmount;
          }
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;

export default productsSlice.reducer;
