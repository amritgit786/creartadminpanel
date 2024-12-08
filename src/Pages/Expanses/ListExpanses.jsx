const ListExpanses = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Expenses</h4>
            </div>
            <div className="table-responsive">
              <table className="table table-vcenter table-mobile-md card-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment Mode</th>
                    <th>Image</th>
                    <th>Bill</th>
                    <th>Paid By</th>
                    <th>Month</th>
                    <th>Year</th>
                    <th className="w-1 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Date">
                      <div>01/10/2024</div>
                    </td>
                    <td data-label="Amount">
                      <div>$100</div>
                    </td>
                    <td data-label="Payment Mode">
                      <div>Credit Card</div>
                    </td>
                    <td data-label="Image">
                      <img
                        src="/public/static/expenses.png"
                        alt="Expense"
                        className="img-thumbnail"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td data-label="Bill">
                      <a href="path/to/bill.pdf" target="_blank">
                        View Bill
                      </a>
                    </td>
                    <td data-label="Paid By">
                      <div>John Doe</div>
                    </td>
                    <td data-label="Month">
                      <div>October</div>
                    </td>
                    <td data-label="Year">
                      <div>2024</div>
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
                    <td data-label="Date">
                      <div>02/10/2024</div>
                    </td>
                    <td data-label="Amount">
                      <div>$250</div>
                    </td>
                    <td data-label="Payment Mode">
                      <div>Bank Transfer</div>
                    </td>
                    <td data-label="Image">
                      <img
                        src="/public/static/expenses.png"
                        alt="Expense"
                        className="img-thumbnail"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td data-label="Bill">
                      <a href="path/to/bill.pdf" target="_blank">
                        View Bill
                      </a>
                    </td>
                    <td data-label="Paid By">
                      <div>Jane Smith</div>
                    </td>
                    <td data-label="Month">
                      <div>October</div>
                    </td>
                    <td data-label="Year">
                      <div>2024</div>
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

export default ListExpanses;
