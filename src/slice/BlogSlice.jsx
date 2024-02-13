import { createSlice } from "@reduxjs/toolkit";
import data from "../components/data/db.json";

const BlogSlice = createSlice({
  name: "blog",
  initialState: { data },
});

export default BlogSlice.reducer;
