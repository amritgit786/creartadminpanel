const Header = () => {
  return (
    <>
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
            aria-controls="navbar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <a href=".">
              <img
                src="./static/creart.svg"
                width={110}
                height={32}
                alt="Creart"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link d-flex lh-1 text-reset p-0"
                data-bs-toggle="dropdown"
                aria-label="Open user menu"
              >
                <span
                  className="avatar avatar-sm"
                  style={{
                    backgroundImage: "url(./static/avatars/user.png)",
                  }}
                />
                <div className="d-none d-xl-block ps-2">
                  <div>Admin User</div>
                  <div className="mt-1 small text-secondary">Admin</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a href="#" className="dropdown-item">
                  Status
                </a>
                <a href="./profile.html" className="dropdown-item">
                  Profile
                </a>
                <a href="#" className="dropdown-item">
                  Feedback
                </a>
                <div className="dropdown-divider" />
                <a href="./settings.html" className="dropdown-item">
                  Settings
                </a>
                <a href="./sign-in.html" className="dropdown-item">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
