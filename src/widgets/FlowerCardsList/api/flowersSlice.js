import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiGetAllFlowersData, apiPostFlowerToCart } from "shared/api/flowers-cards.js"

const actionPrefix = 'cardSlice';
const createPrefixAction = (type, prepareAction) => createAction(`${actionPrefix}/${type}`, prepareAction);
const createThunk = (actionName, fetchCallback) => createAsyncThunk(createPrefixAction(actionName), (deps) => fetchCallback(deps));

const cardSliceActionNames = {
  fetchAllCardItems: 'flowerItems/FetchAllCardItems',
  addItemToCart: 'flowerItems/AddItemToCart'
};

export const fetchAllCardItems = createThunk(cardSliceActionNames.fetchAllCardItems, apiGetAllFlowersData);

export const addItemToCart = createThunk(cardSliceActionNames.addItemToCart, apiPostFlowerToCart);

const initialState = {
  cardItemsData: null,
  cardItemsFetchStatus: false,
  addItemToCartSuccessful: false,
};

export const flowersSlice = createSlice({
  name: 'flowerItems',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllCardItems.pending]: (state) => {
      state.cardItemsFetchStatus = false;
    },
    [fetchAllCardItems.fulfilled]: (state, action) => {
      state.cardItemsFetchStatus = true;
      state.cardItemsData = action.payload;
    },
    [addItemToCart.pending]: (state) => {
      state.addItemToCartSuccessful = false;
    },
    [addItemToCart.fulfilled]: (state, action) => {
      state.addItemToCartSuccessful = true;
    },
  },
});

export default flowersSlice.reducer;
