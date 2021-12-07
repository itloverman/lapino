import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import errorReducer from './errorSlice';
import loadingReducer from './loadingSlice';
import productReducer from './productSlice';

export const rootReducer = combineReducers({
  products: productReducer,
  loadingState: loadingReducer,
  errorState: errorReducer,
  cart: cartReducer,
  categories: categoryReducer,
});
