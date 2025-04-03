import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/counter";

export const store = configureStore({
  reducer: {
    counters: countersReducer,
  },
});

export default store;
