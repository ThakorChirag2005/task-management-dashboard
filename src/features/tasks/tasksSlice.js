import { createSlice, nanoid } from '@reduxjs/toolkit';

// Default tasks shown when no saved tasks exist
const defaultTasks = [
  {
    id: '1',
    title: 'Learn React Hooks',
    description: 'Practice useState, useEffect, and other React hooks.',
    priority: 'High',
    status: 'In Progress',
    dueDate: '2026-10-30',
  },
  {
    id: '2',
    title: 'Build Login Page',
    description: 'Create a responsive login page using React.',
    priority: 'Medium',
    status: 'Pending',
    dueDate: '2026-11-02',
  },
  {
    id: '3',
    title: 'Practice Redux Toolkit',
    description: 'Understand createSlice, configureStore, and Redux hooks.',
    priority: 'High',
    status: 'Completed',
    dueDate: '2026-10-29',
  },
  {
    id: '4',
    title: 'Create Dashboard UI',
    description: 'Build a clean and responsive dashboard interface.',
    priority: 'Low',
    status: 'Pending',
    dueDate: '2026-11-05',
  },
];

// Load tasks from localStorage
function loadTasks() {
  try {
    const savedTasks = localStorage.getItem('tasks');

    if (savedTasks !== null) {
      const parsedTasks = JSON.parse(savedTasks);

      if (Array.isArray(parsedTasks)) {
        return parsedTasks;
      }
    }
  } catch (error) {
    console.error('Could not load tasks:', error);
  }

  return defaultTasks;
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadTasks(),

  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(task) {
        return {
          payload: {
            id: nanoid(),
            title: task.title.trim(),
            description: task.description.trim(),
            priority: task.priority,
            status: task.status,
            dueDate: task.dueDate,
          },
        };
      },
    },

    editTask(state, action) {
      const { id, updates } = action.payload;
      const task = state.find((item) => item.id === id);

      if (task) {
        Object.assign(task, updates);
      }
    },

    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },

    updateTaskStatus(state, action) {
      const { id, status } = action.payload;
      const task = state.find((item) => item.id === id);

      if (task) {
        task.status = status;
      }
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  updateTaskStatus,
} = tasksSlice.actions;

export default tasksSlice.reducer;