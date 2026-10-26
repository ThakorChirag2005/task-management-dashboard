# Repository Instructions

## Project
- This is a JavaScript React 19 app built with Vite.
- State management uses Redux Toolkit and React Redux. Task state is defined in `src/features/tasks/tasksSlice.js`, and the store is in `src/app/store.js`.
- The task slice currently reads its initial state from `localStorage` and provides default tasks when no saved tasks exist. Keep persistence behavior in mind when changing task state.
- `src/main.jsx` currently mounts `App` directly; it does not yet wrap the app in a React Redux `Provider`.

## Structure
- `src/App.jsx`: application entry component.
- `src/components/`: shared UI components.
- `src/features/tasks/`: task-domain state and behavior.
- `src/app/`: application-level setup such as the Redux store.
- `src/assets/`: imported static assets.

## Development
- Install dependencies with `npm install`.
- Start the dev server with `npm run dev`.
- Run ESLint with `npm run lint`.
- Create a production build with `npm run build`.
- There is no test script configured in `package.json`.

## Conventions
- Use functional React components and follow the existing JSX and JavaScript style in nearby files.
- Keep task-specific behavior in the tasks feature and shared UI in `src/components/`.
- Use Redux Toolkit reducers/actions for shared task-state changes; avoid duplicating task state in components.
- Keep changes focused, preserve existing public action and component APIs unless a change requires otherwise, and run lint after code changes.
