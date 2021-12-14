import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// TODO: add load from json
const initialState = {
  eurToUsd: [],
  usdToGbp: [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 300, pv: 1400, amt: 1400 },
  ],
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
      state.value += 1;
    },
    set: (state, action) => {
      state[action.payload.currencyGate] = action.payload.data;
    },
  },
});

export const getCurrentChartData = (currencyGate) => (state) => {
  return state.currency[currencyGate];
}

export const { set } = currencySlice.actions;

export default currencySlice.reducer;
