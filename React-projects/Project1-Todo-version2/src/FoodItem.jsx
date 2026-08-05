function FoodInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      className="form-control my-3"
      onKeyDown={handleKeyDown}
    />
  );
}

export default FoodInput;