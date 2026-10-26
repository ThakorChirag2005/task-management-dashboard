# Task Management Dashboard

This is a simple task management application built using React and Redux Toolkit. It helps users manage their daily tasks in one place.

## Features

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Search tasks by title.
- Filter tasks by status and priority.
- View task summary.
- Save tasks in localStorage so they remain after refreshing the page.

## Technologies Used

- React.js
- Redux Toolkit
- React Redux
- JavaScript
- HTML
- CSS
- localStorage

## Installation

Follow these steps to run the project on your computer.

1. Clone the repository**

git clone YOUR_GITHUB_REPOSITORY_LINK


Replace `YOUR_GITHUB_REPOSITORY_LINK` with your actual GitHub repository URL.

2. Open the project folder**

cd task-management-dashboard


3. Install the required packages**

npm install


## How to Run the Project

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal in your browser.

## How Redux Toolkit Is Used

Redux Toolkit is used to manage task data in one central store.

- `createSlice` creates actions and reducers for task operations.
- `configureStore` creates the Redux store.
- `useSelector` reads task data from the store.
- `useDispatch` dispatches actions to add, edit, or delete tasks.
- `localStorage` saves task data in the browser.

## Screenshots

 Dashboard
(screenshots/dashboard.png)

### Add Task
(screenshots/add-task.png)

### Edit Task
(screenshots/edit-task.png)

## Author

Chiragkumar Sureshbhai Thakor