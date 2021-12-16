import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eurToUsd: [],
  usdToGbp: [],
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrencyExchanges: (state = {}, action) => {
      state[action.payload.currency] = action.payload.data;
    },
  },
});

export const getCurrentChartData = (currencyGate) => (state) => {
  return state.currency[currencyGate];
};

export const { setCurrencyExchanges } = currencySlice.actions;

export default currencySlice.reducer;
