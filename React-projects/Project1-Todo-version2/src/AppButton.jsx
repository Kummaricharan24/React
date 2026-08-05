function AppButton({ item, date, onDelete }) {
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmed) {
      onDelete(item);
      console.log(`${item} deleted`);
    }
  };

  return (
    <div className="container text-center mt-3">
      <div className="row align-items-center">
        <div className="col-6">
          <input
            type="text"
            value={item}
            className="form-control"
            readOnly
          />
        </div>

        <div className="col-4">
          <div className="border rounded p-2">{date}</div>
        </div>

        <div className="col-2">
          <button className="btn btn-danger w-100" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppButton;