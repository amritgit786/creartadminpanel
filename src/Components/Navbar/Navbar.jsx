import { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const stateDropdownRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const areaDropdownRef = useRef(null);
  const location = useLocation();

  const handleDropdownClose = (...dropdownRefs) => {
    dropdownRefs.forEach((dropdownRef) => {
      const dropdownElement = dropdownRef.current;
      if (dropdownElement) {
        const dropdownInstance =
          window.bootstrap.Dropdown.getInstance(dropdownElement);
        if (dropdownInstance) {
          dropdownInstance.hide();
        }
      }
    });
  };

  const isActiveRoute = (path) => location.pathname === path;
  return (
    <>
      <header className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div className="navbar">
            <div className="container-xl">
              <ul className="navbar-nav">
                <li
                  className={`nav-item ${isActiveRoute("/") ? "active" : ""}`}
                >
                  <NavLink className="nav-link" to="/">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Home</span>
                  </NavLink>
                </li>
                <li
                  className={`nav-item dropdown ${
                    location.pathname.includes("/employee") ? "active" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link"
                    to="#"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    ref={dropdownRef}
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Employee</span>
                  </NavLink>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <NavLink
                          className="dropdown-item"
                          to="/addemployee"
                          onClick={handleDropdownClose}
                        >
                          Add Employee
                        </NavLink>
                        <NavLink
                          className="dropdown-item"
                          to="/listemployee"
                          onClick={handleDropdownClose}
                        >
                          All Employees
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#navbar-base"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                    ref={dropdownRef}
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Location</span>
                  </NavLink>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <div className="dropend">
                          <NavLink
                            className="dropdown-item dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            aria-expanded="false"
                            ref={stateDropdownRef}
                          >
                            State
                          </NavLink>
                          <div className="dropdown-menu">
                            <NavLink
                              to="/addstate"
                              className="dropdown-item"
                              onClick={() =>
                                handleDropdownClose(
                                  dropdownRef,
                                  stateDropdownRef,
                                  cityDropdownRef,
                                  areaDropdownRef
                                )
                              }
                            >
                              Add State
                            </NavLink>
                            <NavLink
                              to="/liststate"
                              className="dropdown-item"
                              onClick={() =>
                                handleDropdownClose(
                                  dropdownRef,
                                  stateDropdownRef,
                                  cityDropdownRef,
                                  areaDropdownRef
                                )
                              }
                            >
                              All States
                            </NavLink>
                          </div>
                        </div>
                        <div className="dropend">
                          <Link
                            className="dropdown-item dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            ref={cityDropdownRef}
                            aria-expanded="false"
                          >
                            City
                          </Link>
                          <div className="dropdown-menu">
                            <NavLink
                              to="/addcity"
                              className="dropdown-item"
                              onClick={() =>
                                handleDropdownClose(
                                  dropdownRef,
                                  stateDropdownRef,
                                  cityDropdownRef,
                                  areaDropdownRef
                                )
                              }
                            >
                              Add City
                            </NavLink>
                            <NavLink
                              to="/listcity"
                              className="dropdown-item"
                              onClick={() =>
                                handleDropdownClose(
                                  dropdownRef,
                                  stateDropdownRef,
                                  cityDropdownRef,
                                  areaDropdownRef
                                )
                              }
                            >
                              All Cities
                            </NavLink>
                          </div>
                        </div>
                        <div className="dropend">
                          <Link
                            className="dropdown-item dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            role="button"
                            ref={areaDropdownRef}
                            aria-expanded="false"
                          >
                            Area
                          </Link>
                          <div className="dropdown-menu">
                            <NavLink
                              to="/addarea"
                              className="dropdown-item"
                              onClick={() =>
                                handleDropdownClose(
                                  dropdownRef,
                                  stateDropdownRef,
                                  cityDropdownRef,
                                  areaDropdownRef
                                )
                              }
                            >
                              Add Area
                            </NavLink>
                            <NavLink
                              to="/listarea"
                              className="dropdown-item"
                              onClick={() =>
                                handleDropdownClose(
                                  dropdownRef,
                                  stateDropdownRef,
                                  cityDropdownRef,
                                  areaDropdownRef
                                )
                              }
                            >
                              All Areas
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className={`nav-item ${
                    isActiveRoute("/attendancelist") ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/attendancelist">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-clock"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10.5 21h-4.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M4 11h10" />
                        <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                        <path d="M18 16.5v1.5l.5 .5" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Attendance</span>
                  </NavLink>
                </li>

                <li
                  className={`nav-item dropdown ${
                    location.pathname.includes("/addworkshifts") ? "active" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link"
                    to="#"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    ref={dropdownRef}
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                        <path d="M12 12l0 .01" />
                        <path d="M3 13a20 20 0 0 0 18 0" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Work Shift</span>
                  </NavLink>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <NavLink
                          className="dropdown-item"
                          to="/addworkshift"
                          onClick={handleDropdownClose}
                        >
                          Add Work Shifts
                        </NavLink>
                        <NavLink
                          className="dropdown-item"
                          to="/listworkshift"
                          onClick={handleDropdownClose}
                        >
                          All Work Shift
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className={`nav-item ${
                    isActiveRoute("/expanselist") ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/expanselist">
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-currency-dollar"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                        <path d="M12 3v3m0 12v3" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Expanses</span>
                  </NavLink>
                </li>

                <li
                  className={`nav-item dropdown ${
                    location.pathname.includes("/leaverequest") ? "active" : ""
                  }`}
                >
                  <NavLink
                    className="nav-link"
                    to="#"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    ref={dropdownRef}
                  >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-door-exit"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 12v.01" />
                        <path d="M3 21h18" />
                        <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
                        <path d="M14 7h7m-3 -3l3 3l-3 3" />
                      </svg>
                    </span>
                    <span className="nav-link-title">Leaves</span>
                  </NavLink>
                  <div className="dropdown-menu">
                    <div className="dropdown-menu-columns">
                      <div className="dropdown-menu-column">
                        <NavLink
                          className="dropdown-item"
                          to="/leaverequest"
                          onClick={handleDropdownClose}
                        >
                          Leaves
                        </NavLink>
                        <NavLink
                          className="dropdown-item"
                          to="/leavesinfo"
                          onClick={handleDropdownClose}
                        >
                          Leaves Info
                        </NavLink>
                        <NavLink
                          className="dropdown-item"
                          to="/holidaylist"
                          onClick={handleDropdownClose}
                        >
                          Holiday
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
