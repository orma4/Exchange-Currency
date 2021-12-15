import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// TODO: add load from json
const initialState = {
  eurToUsd: [],
  usdToGbp: [],
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.value += 1;
    },
    setCurrencyExchanges: (state = {}, action) => {
      state[action.payload.currency] = action.payload.data;
    },
  },
});

export const getCurrentChartData = (currencyGate) => (state) => {
  return state.currency[currencyGate];
}

export const { setCurrencyExchanges } = currencySlice.actions;

export default currencySlice.reducer;
