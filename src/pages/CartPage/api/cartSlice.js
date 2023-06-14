import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiGetAllItemsInCart } from "shared/api/cart.js"

const actionPrefix = 'cartSlice';
const createPrefixAction = (type, prepareAction) => createAction(`${actionPrefix}/${type}`, prepareAction);
const createThunk = (actionName, fetchCallback) => createAsyncThunk(createPrefixAction(actionName), (deps) => fetchCallback(deps));

const cardSliceActionNames = {
  fetchAllCardItems: 'cartItems/FetchAllCardItems',
};

export const fetchAllCartItems = createThunk(cardSliceActionNames.fetchAllCardItems, apiGetAllItemsInCart);

const initialState = {
  cartItems: null,
  fetchCartItemsSuccess: false,
};

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = null;
      state.fetchCartItemsSuccess = false;
    }
  },
  extraReducers: {
    [fetchAllCartItems.pending]: (state) => {
      state.fetchCartItemsSuccess = false;
    },
    [fetchAllCartItems.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.fetchCartItemsSuccess = true;
    }
  },
});

export const {
  clearCart
} = cartSlice.actions

export default cartSlice.reducer;
