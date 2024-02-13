import { configureStore } from "@reduxjs/toolkit";
import BlogSliceReducer from "../slice/BlogSlice";

export const store = configureStore({
  reducer: {
    blog: BlogSliceReducer,
  },
});
