const Holiday = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Holiday Information</h4>
            </div>
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Holiday Name</th>
                    <th>Holiday Date</th>
                    <th>Year</th>
                    <th className="w-1 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Holiday Name">
                      <div>Christmas</div>
                    </td>
                    <td data-label="Holiday Date">
                      <div>25th December</div>
                    </td>
                    <td data-label="Year">
                      <div>2024</div>
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
                    <td data-label="Holiday Name">
                      <div>New Year's Day</div>
                    </td>
                    <td data-label="Holiday Date">
                      <div>1st January</div>
                    </td>
                    <td data-label="Year">
                      <div>2024</div>
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

export default Holiday;
