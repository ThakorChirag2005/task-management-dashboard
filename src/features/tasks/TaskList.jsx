import TaskItem from './TaskItem.jsx';

function TaskList({ tasks, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">▤</div>

        <h3>No tasks found</h3>

        <p>
          Try changing your search or filters, or create a new task.
        </p>
      </div>
    );
  }

  return (
    <section className="task-grid">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
        />
      ))}
    </section>
  );
}

export default TaskList;