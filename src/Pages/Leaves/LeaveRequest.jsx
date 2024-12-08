const LeaveRequest = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Leave Requests</h4>
            </div>
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Leave Type</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th className="w-1 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Employee Name">
                      <div>John Doe</div>
                    </td>
                    <td data-label="Leave Type">
                      <div>Sick Leave</div>
                    </td>
                    <td data-label="From Date">
                      <div>01/10/2024</div>
                    </td>
                    <td data-label="To Date">
                      <div>05/10/2024</div>
                    </td>
                    <td data-label="Reason">
                      <div>Flu</div>
                    </td>
                    <td data-label="Status">
                      <select className="form-select">
                        <option value="enum" disabled>
                          -- Select Status --
                        </option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td>
                      <div className="btn-list flex-nowrap">
                        <a href="#" className="btn">
                          Edit
                        </a>
                        <a href="#" className="btn">
                          Delete
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Employee Name">
                      <div>Jane Smith</div>
                    </td>
                    <td data-label="Leave Type">
                      <div>Casual Leave</div>
                    </td>
                    <td data-label="From Date">
                      <div>10/10/2024</div>
                    </td>
                    <td data-label="To Date">
                      <div>12/10/2024</div>
                    </td>
                    <td data-label="Reason">
                      <div>Family Event</div>
                    </td>
                    <td data-label="Status">
                      <select className="form-select">
                        <option value="enum" disabled>
                          -- Select Status --
                        </option>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td>
                      <div className="btn-list flex-nowrap">
                        <a href="#" className="btn">
                          Edit
                        </a>
                        <a href="#" className="btn">
                          Delete
                        </a>
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

export default LeaveRequest;
