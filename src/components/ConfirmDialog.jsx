function ConfirmDialog({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="dialog-backdrop"
      onClick={onCancel}
    >
      <section
        className="confirm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-icon">!</div>

        <h2 id="dialog-title">{title}</h2>

        <p>{message}</p>

        <div className="dialog-actions">
          <button
            type="button"
            className="button button-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="button button-danger"
            onClick={onConfirm}
          >
            Delete Task
          </button>
        </div>
      </section>
    </div>
  );
}

export default ConfirmDialog;