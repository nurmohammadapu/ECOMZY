import { configureStore } from '@reduxjs/toolkit';
import { CartSlice } from './slices/CartSlice';
import CartReducer from './slices/CartSlice';

export const store = configureStore({
  reducer:{
    cart: CartSlice.reducer,
  }
});