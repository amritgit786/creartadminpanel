const ListWorkShifts = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Work Shifts</h4>
            </div>
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>From Time</th>
                    <th>To Time</th>
                    <th className="w-1 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Title">
                      <div className="font-weight-medium">Morning Shift</div>
                    </td>
                    <td data-label="From Time">
                      <div>08:00 AM</div>
                    </td>
                    <td data-label="To Time">
                      <div>04:00 PM</div>
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
                    <td data-label="Title">
                      <div className="font-weight-medium">Evening Shift</div>
                    </td>
                    <td data-label="From Time">
                      <div>04:00 PM</div>
                    </td>
                    <td data-label="To Time">
                      <div>12:00 AM</div>
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
                    <td data-label="Title">
                      <div className="font-weight-medium">Night Shift</div>
                    </td>
                    <td data-label="From Time">
                      <div>12:00 AM</div>
                    </td>
                    <td data-label="To Time">
                      <div>08:00 AM</div>
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

export default ListWorkShifts;
