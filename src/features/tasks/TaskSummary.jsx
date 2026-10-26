function TaskSummary({ tasks }) {
  const total = tasks.length;

  const pending = tasks.filter(
    (task) => task.status === 'Pending'
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === 'In Progress'
  ).length;

  const completed = tasks.filter(
    (task) => task.status === 'Completed'
  ).length;

  const summaries = [
    {
      label: 'Total Tasks',
      count: total,
      icon: '▤',
      className: 'summary-purple',
    },
    {
      label: 'Pending',
      count: pending,
      icon: '◷',
      className: 'summary-orange',
    },
    {
      label: 'In Progress',
      count: inProgress,
      icon: '↗',
      className: 'summary-blue',
    },
    {
      label: 'Completed',
      count: completed,
      icon: '✓',
      className: 'summary-green',
    },
  ];

  return (
    <section className="summary-grid">
      {summaries.map((item) => (
        <article className="summary-card" key={item.label}>
          <div>
            <p>{item.label}</p>
            <h2>{item.count}</h2>
          </div>

          <div className={`summary-icon ${item.className}`}>
            {item.icon}
          </div>
        </article>
      ))}
    </section>
  );
}

export default TaskSummary;