import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiGetAllItemsInCart } from "shared/api/cart.js"

const actionPrefix = 'headerSlice';
const createPrefixAction = (type, prepareAction) => createAction(`${actionPrefix}/${type}`, prepareAction);
const createThunk = (actionName, fetchCallback) => createAsyncThunk(createPrefixAction(actionName), (deps) => fetchCallback(deps));

const cardSliceActionNames = {
  fetchAllCardItems: 'flowerItems/FetchAllCardItems',
  addItemToCart: 'flowerItems/AddItemToCart'
};

export const fetchAllCartItems = createThunk(cardSliceActionNames.fetchAllCardItems, apiGetAllItemsInCart);

const initialState = {
  cartItems: null,
  fetchCartItemsSuccess: false,
};

export const headerSlice = createSlice({
  name: 'headerSlice',
  initialState,
  reducers: {},
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

export default headerSlice.reducer;
