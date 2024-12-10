import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    // loom: loomReducer,
    modal: modalReducer,
  },
});
