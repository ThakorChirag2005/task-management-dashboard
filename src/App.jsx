import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './components/Header.jsx';

import TaskForm from './features/tasks/TaskForm.jsx';
import TaskList from './features/tasks/TaskList.jsx';
import TaskFilters from './features/tasks/TaskFilters.jsx';
import TaskSummary from './features/tasks/TaskSummary.jsx';

function App() {
  // Read tasks from the Redux store
  const tasks = useSelector((state) => state.tasks);

  // Search and filter states
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');

  // Task form states
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Apply search and both filters together
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const matchesStatus =
        statusFilter === 'All' || task.status === statusFilter;

      const matchesPriority =
        priorityFilter === 'All' || task.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, search, statusFilter, priorityFilter]);

  // Open the form for creating a new task
  const openNewTaskForm = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  // Open the form for editing an existing task
  const openEditTaskForm = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  // Close the form
  const closeForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  // Close the form after a task is saved
  const handleSaved = () => {
    closeForm();
  };

  return (
    <div className="app-shell" id="dashboard">
      <Header />

      <main className="dashboard-container">
        <section className="welcome-section">
          <div>
            <p className="eyebrow">WORKSPACE OVERVIEW</p>

            <h1>Good work starts with a plan.</h1>

            <p className="welcome-description">
              Organize your tasks, track your progress, and get things done.
            </p>
          </div>

          <button
            className="button button-primary add-task-button"
            type="button"
            onClick={openNewTaskForm}
          >
            + Add New Task
          </button>
        </section>

        <TaskSummary tasks={tasks} />

        {showForm && (
          <TaskForm
            editingTask={editingTask}
            onCancel={closeForm}
            onSaved={handleSaved}
          />
        )}

        <section className="tasks-section">
          <div className="section-heading tasks-heading">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h2>All Tasks</h2>
            </div>

            <span className="result-count">
              {filteredTasks.length} of {tasks.length} tasks
            </span>
          </div>

          <TaskFilters
            search={search}
            setSearch={setSearch}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            priorityFilter={priorityFilter}
            setPriorityFilter={setPriorityFilter}
          />

          <TaskList
            tasks={filteredTasks}
            onEdit={openEditTaskForm}
          />
        </section>

        <footer className="app-footer">
          Built with React and Redux Toolkit
        </footer>
      </main>
    </div>
  );
}

export default App;