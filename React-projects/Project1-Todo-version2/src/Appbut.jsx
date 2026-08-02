function Appbut({ item, date }) {
  return (
    <div>
      <div className="container text-center mt-3">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder={item} />
          </div>

          <div style={{ border: "1px solid #111", borderRadius: "5px", padding: "5px" }} className="col-4">
            {date}
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

      
    </div>
  );
}

export default Appbut;
