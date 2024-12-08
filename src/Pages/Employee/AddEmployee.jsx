const AddEmployee = () => {
  return (
    <>
      <div className="container-xl">
        <div className="row row-cards">
          <div className="col-12">
            <form action="" className="card">
              <div className="card-header">
                <h4 className="card-title">Add Employee</h4>
              </div>
              <div className="card-body">
                <div className="row g-5">
                  <div className="col-xl">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="fname" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fname"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="mname" className="form-label">
                            Middle Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="mname"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="lname" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lname"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label htmlFor="contact" className="form-label">
                            Contact
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="contact"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="dob" className="form-label">
                            Birth Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            id="dob"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <div className="form-label">Gender</div>
                          <div>
                            <label className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                defaultChecked
                              />
                              <span className="form-check-label">Male</span>
                            </label>
                            <label className="form-check form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                              />
                              <span className="form-check-label">Female</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">
                            Address
                          </label>
                          <textarea className="form-control" id="address" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <div className="form-label">Area</div>
                          <select
                            type="text"
                            className="form-select"
                            id="area"
                            value=""
                          >
                            <option value="raj">Bapunagar</option>
                            <option value="mum">Mota Varacha</option>
                            <option value="guj" selected>
                              Nikol
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <div className="form-label">State</div>
                          <select
                            type="text"
                            className="form-select"
                            id="states"
                            value=""
                          >
                            <option value="raj">Rajasthan</option>
                            <option value="mum">Mumbai</option>
                            <option value="guj" selected>
                              Gujarat
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <div className="form-label">City</div>
                          <select
                            type="text"
                            className="form-select"
                            id="city"
                            value=""
                          >
                            <option value="raj">Surat</option>
                            <option value="mum">Rajkot</option>
                            <option value="guj" selected>
                              Ahmedabad
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="pimage" className="form-label">
                            Profile Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="pimage"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="status" className="form-label">
                            Status
                          </label>
                          <select
                            id="status"
                            name="status"
                            className="form-select"
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="on-leave">On Leave</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="remarks" className="form-label">
                            Remarks
                          </label>
                          <textarea
                            className="form-control"
                            id="remarks"
                            name="remarks"
                            rows="4"
                            placeholder="Enter any remarks here"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="role" className="form-label">
                            Role
                          </label>
                          <select id="role" name="role" className="form-select">
                            <option value="admin">Admin</option>
                            <option value="counsellor">Counsellor</option>
                            <option value="faculty">Faculty</option>
                            <option value="student">Student</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer pb-0">
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
