import { useState } from "react";
import AppButton from "./AppButton";
import AppName from "./AppName";
import Input from "./FoodItem";

function App() {
  const [todos, setTodos] = useState([
    {
      item: "Butter Milk",
      date: "16-12-2005",
    },
    {
      item: "I Love Cherry",
      date: "16-12-2005",
    },
    {
      item: "Market",
      date: "16-12-2005",
    },
  ]);

  const deleteItem = (itemName) => {
    setTodos(todos.filter((todo) => todo.item !== itemName));
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Todo App</h1>

      <AppName />
      <Input />

      {todos.map((todo, index) => (
        <AppButton
          key={index}
          item={todo.item}
          date={todo.date}
          onDelete={deleteItem}
        />

      ))}
    </div>
  );
}

export default App;