import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPost } from "./postsAPI";

const initialState = {
  posts: [],
  isError: false,
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const posts = await getPost();
  return posts;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.error = action.error?.message;
    });
  },
});

export default postsSlice.reducer;
