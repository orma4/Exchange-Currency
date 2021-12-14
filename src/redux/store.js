import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
