const LeavesInfo = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Leave Information</h4>
            </div>
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Employee Name</th>
                    <th>Leave Type</th>
                    <th>Total Leaves</th>
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
                    <td data-label="Total Leaves">
                      <div>12</div>
                    </td>
                    <td>
                      <div className="btn-list flex-nowrap">
                        <a href="#" className="btn">
                          Edit
                        </a>
                        <a className="btn" href="#">
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
                    <td data-label="Total Leaves">
                      <div>8</div>
                    </td>
                    <td>
                      <div className="btn-list flex-nowrap">
                        <a href="#" className="btn">
                          Edit
                        </a>
                        <a className="btn" href="#">
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

export default LeavesInfo;
