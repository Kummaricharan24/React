function Input({ extraClass = "" }) {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Type something..."
      className={`form-control my-3 ${extraClass}`}
      onChange={handleChange}
    />
  );
}

export default Input;