import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import boardSlice from "./boardSlice";

export const store = configureStore({
  reducer: {
    taskSlice,
    boardSlice,
  },
});
