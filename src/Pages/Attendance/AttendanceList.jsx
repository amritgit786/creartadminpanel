const AttendanceList = () => {
  return (
    <div className="container-xl">
      <div className="row row-card">
        <div className="col-xl">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Emp_Name</th>
                    <th>Attendance_Date</th>
                    <th>In_Time</th>
                    <th>In_Time_Remarks</th>
                    <th>Out_Time</th>
                    <th>Out_Time_Remarks</th>
                    <th>Image</th>
                    <th>Location</th>
                    <th>Device-Info</th>
                    <th className="w-1 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Emp_Name">
                      <div className="d-flex py-1 align-items-center">
                        <span
                          className="avatar me-2"
                          style={{
                            backgroundImage: "url(./static/avatars/010m.jpg)",
                          }}
                        ></span>
                        <div className="flex-fill">
                          <div className="font-weight-medium">
                            Thatcher Keel
                          </div>
                          <div className="text-secondary">
                            <a href="#" className="text-reset">
                              tkeelf@blogger.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td data-label="Attendance_Date">2024-10-01</td>
                    <td data-label="In_Time">09:00 AM</td>
                    <td data-label="In_Time_Remarks">On Time</td>
                    <td data-label="Out_Time">05:30 PM</td>
                    <td data-label="Out_Time_Remarks">Left Early</td>
                    <td data-label="Image">
                      <img
                        src="./static/avatars/010m.jpg"
                        alt="Emp Image"
                        className="avatar me-2"
                      />
                    </td>
                    <td data-label="Location">New York Office</td>
                    <td data-label="Device-Info">iPhone 13</td>
                    <td>
                      <div className="btn-list flex-nowrap">
                        <a href="#" className="btn">
                          Edit
                        </a>
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle align-text-top"
                            data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              View
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td data-label="Emp_Name">
                      <div className="d-flex py-1 align-items-center">
                        <span
                          className="avatar me-2"
                          style={{
                            backgroundImage: "url(./static/avatars/005f.jpg)",
                          }}
                        ></span>
                        <div className="flex-fill">
                          <div className="font-weight-medium">Dyann Escala</div>
                          <div className="text-secondary">
                            <a href="#" className="text-reset">
                              descalag@usatoday.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td data-label="Attendance_Date">2024-10-01</td>
                    <td data-label="In_Time">09:15 AM</td>
                    <td data-label="In_Time_Remarks">Late Arrival</td>
                    <td data-label="Out_Time">05:45 PM</td>
                    <td data-label="Out_Time_Remarks">On Time</td>
                    <td data-label="Image">
                      <img
                        src="./static/avatars/005f.jpg"
                        alt="Emp Image"
                        className="avatar me-2"
                      />
                    </td>
                    <td data-label="Location">San Francisco Office</td>
                    <td data-label="Device-Info">Samsung Galaxy S22</td>
                    <td>
                      <div className="btn-list flex-nowrap">
                        <a href="#" className="btn">
                          Edit
                        </a>
                        <div className="dropdown">
                          <button
                            className="btn dropdown-toggle align-text-top"
                            data-bs-toggle="dropdown"
                          >
                            Actions
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              View
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceList;
