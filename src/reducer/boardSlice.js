import { createSlice } from "@reduxjs/toolkit";
import { taskStatusType } from "../utils/constants";

const initialState = {
  statuses: [...Object.values(taskStatusType)],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addStatus: (state, action) => {
      if (!state.statuses.includes(action.payload)) {
        state.statuses.push(action.payload);
      }
    },
  },
});

export const { addStatus } = boardSlice.actions;

export default boardSlice.reducer;
