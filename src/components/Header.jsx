function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#dashboard">
        <span className="brand-icon">✓</span>
        <span>TaskFlow</span>
      </a>

      <div className="header-label">
        <span className="online-dot"></span>
        Task Management Dashboard
      </div>

      <div className="profile">
        <div className="profile-avatar">C</div>

        <div>
          <strong>My Workspace</strong>
          <small>Trainee Developer</small>
        </div>
      </div>
    </header>
  );
}

export default Header;