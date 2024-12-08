import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/addemployee": "Employee",
    "/listemployee": "Employee",
    "/addstate": "State",
    "/liststate": "State",
    "/addcity": "City",
    "/listcity": "City",
    "/addarea": "Area",
    "/listarea": "Area",
    "/attendancelist": "Attendance",
    "/addworkshift": "Work Shifts",
    "/listworkshift": "Work Shifts",
    "/expanselist": "Expanses",
    "/leaverequest": "Leaves",
    "/leavesinfo": "Leaves",
  };

  const pageTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <>
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col-md-6">
              <div className="page-pretitle">Overview</div>
              <h2 className="page-title">{pageTitle}</h2>
            </div>
            <div className="col-md-6">
              <form action="./" method="get" autoComplete="off" noValidate>
                <div className="input-icon">
                  <span className="input-icon-addon">
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
                      <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                      <path d="M21 21l-6 -6" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    defaultValue
                    className="form-control"
                    placeholder="Search…"
                    aria-label="Search in website"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
