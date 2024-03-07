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
  },
});

// Export actions
export const { addTask } = taskSlice.actions;

// Export reducer
export default taskSlice.reducer;
