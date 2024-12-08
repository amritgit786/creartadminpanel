const AllStates = () => {
  return (
    <div className="container-xl">
      <div className="row row-card">
        <div className="col-xl">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Sr No</th>
                    <th>State Name</th>
                    <th className="w-1 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td data-label="Title">
                      <div>Gujarat</div>
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
                    <td>2</td>
                    <td data-label="Title">
                      <div>Surat</div>
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

export default AllStates;