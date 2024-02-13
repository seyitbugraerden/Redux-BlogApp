import { createSlice } from "@reduxjs/toolkit";
import data from "../components/data/db.json";

const BlogSlice = createSlice({
  name: "blog",
  initialState: { data, selectedData: null },
  reducers: {
    onTheClick: (state, action) => {
      const postId = action.payload;
      const selectedPost = state.data.find((post) => post.id === postId);
      if (selectedPost) {
        state.selectedData = selectedPost;
      }
    },
  },
});

export const { onTheClick } = BlogSlice.actions;
export default BlogSlice.reducer;
