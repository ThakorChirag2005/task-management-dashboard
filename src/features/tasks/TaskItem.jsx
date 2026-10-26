import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  deleteTask,
  updateTaskStatus,
} from './tasksSlice.js';

import ConfirmDialog from '../../components/ConfirmDialog.jsx';

function TaskItem({ task, onEdit }) {
  const dispatch = useDispatch();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setShowConfirm(false);
  };

  const handleStatusChange = (event) => {
    dispatch(
      updateTaskStatus({
        id: task.id,
        status: event.target.value,
      })
    );
  };

  const formattedDate = new Date(
    `${task.dueDate}T00:00:00`
  ).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <>
      <article className="task-card">
        <div className="task-card-top">
          <span
            className={`priority-badge priority-${task.priority.toLowerCase()}`}
          >
            {task.priority} Priority
          </span>

          <button
            className="icon-button delete-button"
            type="button"
            onClick={() => setShowConfirm(true)}
            aria-label={`Delete ${task.title}`}
            title="Delete task"
          >
            ×
          </button>
        </div>

        <h3>{task.title}</h3>

        <p className="task-description">
          {task.description || 'No description provided.'}
        </p>

        <div className="task-date">
          <span aria-hidden="true">◷</span>
          <span>Due {formattedDate}</span>
        </div>

        <div className="task-card-footer">
          <select
            className={`status-select status-${task.status.toLowerCase().replace(' ', '-')}`}
            value={task.status}
            onChange={handleStatusChange}
            aria-label={`Change status for ${task.title}`}
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <button
            className="edit-button"
            type="button"
            onClick={() => onEdit(task)}
          >
            Edit
          </button>
        </div>
      </article>

      <ConfirmDialog
        isOpen={showConfirm}
        title="Delete this task?"
        message={`Are you sure you want to delete "${task.title}"? The deleted task cannot be restored.`}
        onConfirm={handleDelete}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}

export default TaskItem;