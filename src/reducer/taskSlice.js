import { createSlice } from "@reduxjs/toolkit";
import { sampleTasks } from "../mocks/sampleTask";
import { taskStatusType } from "../utils/constants";

const initialState = {
  tasks: sampleTasks,
  statuses: [...Object.values(taskStatusType)],
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const existingId = action.payload.id;
      const index = state.tasks.findIndex(({ id }) => id === existingId);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      const existingId = action.payload;
      state.tasks = state.tasks.filter(({ id }) => id !== existingId);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex].status = status;
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, updateTaskStatus } = taskSlice.actions;

export default taskSlice.reducer;
