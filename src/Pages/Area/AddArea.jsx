const AddArea = () => {
  return (
    <div className="container-xl">
      <div className="row row-cards">
        <div className="col-12">
          <form action="" className="card">
            <div className="card-header">
              <h4 className="card-title mx-auto">Add Area</h4>
            </div>
            <div className="card-body">
              <div className="row g-5 justify-content-center">
                <div className="col-xl-6">
                  <div className="mb-3">
                    <label htmlFor="area" className="form-label">
                      Area
                    </label>
                    <input type="text" className="form-control" id="area" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                      City
                    </label>
                    <select className="form-control" id="city">
                      <option value="">Ahmedabad</option>
                      <option value="">Varacha</option>
                      <option value="">Maninangar</option>
                      <option value="">Bapunagar</option>
                    </select>
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

export default AddArea;
