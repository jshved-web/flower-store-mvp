import { combineReducers, configureStore } from '@reduxjs/toolkit';
import flowerItems from 'widgets/FlowerCardsList/api/flowersSlice.js';
import header from 'widgets/Header/api/headerSlice.js';
import cart from 'pages/CartPage/api/cartSlice.js';

const rootReducer = combineReducers({
  flowerItems,
  header,
  cart,
});

export const setupStore = () => {
  return configureStore({
    devTools: true,
    reducer: rootReducer,
  });
};
