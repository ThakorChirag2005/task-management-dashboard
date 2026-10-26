import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask, editTask } from './tasksSlice.js';

const emptyForm = {
  title: '',
  description: '',
  priority: 'Medium',
  status: 'Pending',
  dueDate: '',
};

function TaskForm({ editingTask, onCancel, onSaved }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState('');

  // Fill the form when editing an existing task
  useEffect(() => {
    if (editingTask) {
      setForm({
        title: editingTask.title,
        description: editingTask.description,
        priority: editingTask.priority,
        status: editingTask.status,
        dueDate: editingTask.dueDate,
      });
    } else {
      setForm({ ...emptyForm });
    }

    setError('');
  }, [editingTask]);

  // Update the form when an input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  // Validate and save the task
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const title = form.title.trim();

    if (!title) {
      setError('Task title is required.');
      return;
    }

    if (!form.dueDate) {
      setError('Please select a due date.');
      return;
    }

    const dateParts = form.dueDate.split('-').map(Number);
    const [year, month, day] = dateParts;
    const date = new Date(year, month - 1, day);

    const isValidDate =
      /^\d{4}-\d{2}-\d{2}$/.test(form.dueDate) &&
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day;

    if (!isValidDate) {
      setError('Please enter a valid due date.');
      return;
    }

    const taskData = {
      title,
      description: form.description.trim(),
      priority: form.priority,
      status: form.status,
      dueDate: form.dueDate,
    };

    if (editingTask) {
      dispatch(
        editTask({
          id: editingTask.id,
          updates: taskData,
        })
      );
    } else {
      dispatch(addTask(taskData));
    }

    setForm({ ...emptyForm });
    onSaved();
  };

  return (
    <section className="form-panel" id="task-form">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            {editingTask ? 'UPDATE TASK' : 'CREATE SOMETHING GREAT'}
          </p>

          <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
        </div>

        <button
          className="icon-button"
          type="button"
          onClick={onCancel}
          aria-label="Close task form"
        >
          ×
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <label className="field field-full">
            <span>Task Title *</span>

            <input
              name="title"
              type="text"
              placeholder="e.g. Build a login page"
              value={form.title}
              onChange={handleChange}
              maxLength={100}
              required
            />
          </label>

          <label className="field field-full">
            <span>Description</span>

            <textarea
              name="description"
              placeholder="What needs to be done?"
              value={form.description}
              onChange={handleChange}
              rows="3"
              maxLength={500}
            />
          </label>

          <label className="field">
            <span>Priority</span>

            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label className="field">
            <span>Status</span>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>

          <label className="field field-full">
            <span>Due Date *</span>

            <input
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}

        <div className="form-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button type="submit" className="button button-primary">
            {editingTask ? 'Save Changes' : '+ Create Task'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;