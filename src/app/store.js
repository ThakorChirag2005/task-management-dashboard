import { configureStore } from '@reduxjs/toolkit';

import tasksReducer from '../features/tasks/tasksSlice.js';

// Create the Redux store
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

// Save tasks whenever the Redux state changes
store.subscribe(() => {
  try {
    const tasks = store.getState().tasks;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  } catch (error) {
    console.error('Could not save tasks:', error);
  }
});

// Export the store for the React application
export default store;