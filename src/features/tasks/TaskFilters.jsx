function TaskFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
}) {
  return (
    <section className="filters-panel">
      <div className="search-box">
        <span aria-hidden="true">⌕</span>

        <input
          type="search"
          placeholder="Search tasks by title..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search tasks by title"
        />
      </div>

      <select
        value={statusFilter}
        onChange={(event) => setStatusFilter(event.target.value)}
        aria-label="Filter tasks by status"
      >
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priorityFilter}
        onChange={(event) => setPriorityFilter(event.target.value)}
        aria-label="Filter tasks by priority"
      >
        <option value="All">All Priorities</option>
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
    </section>
  );
}

export default TaskFilters;