const AddWorkShifts = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <form action="" className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Add Work Shifts</h4>
            </div>
            <div className="card-body">
              <div className="row g-5 justify-content-center">
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter shift title"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="from_time" className="form-label">
                      From Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="from_time"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="to_time" className="form-label">
                      To Time
                    </label>
                    <input type="time" className="form-control" id="to_time" />
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
  );
};

export default AddWorkShifts;
