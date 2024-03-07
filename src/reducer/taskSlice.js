import { createSlice } from '@reduxjs/toolkit';
import { sampleTasks } from '../mocks/sampleTask';

const initialState = {
  tasks: sampleTasks,
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const existingId = action.payload.id;
      const index = state.tasks.findIndex(({id}) => id === existingId);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  },
});

export const { addTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
