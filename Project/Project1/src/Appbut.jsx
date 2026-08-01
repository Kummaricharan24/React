function Appbut() {
  return (
    <div>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Buy milk" />
          </div>

          <div className="col-4">
            16-12-2005
          </div>

          <div className="col-2">
            <button
              style={{ backgroundColor: "red", color: "black" }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-6">
            <input
              style={{ color: "black" }}
              type="text"
              placeholder="Go To College"
            />
          </div>

          <div className="col-4">
            16-12-2005
          </div>

          <div className="col-2">
            <button
              style={{ backgroundColor: "red", color: "black", textAlign:"center"}}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appbut;