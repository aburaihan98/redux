import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/counter";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postsReducer,
  },
});

export default store;
