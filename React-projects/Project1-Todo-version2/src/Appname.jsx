function AppName({ OnkeyDown }) {
  return (
    <div className="container text-center mb-3">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo"
            className="form-control"
            onKeyDown={OnkeyDown}
          />
        </div>

        <div className="col-4">
          <input type="date" className="form-control" />
        </div>

        <div className="col-2">
          <button className="btn btn-primary w-100">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppName;