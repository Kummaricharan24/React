import { useState } from "react";
import AppButton from "./AppButton";
import AppName from "./AppName";

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

  
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");

  const addTodo = () => {
    if (item.trim() === "") return;

    const newItems = [
      ...todos,
      {
        item,
        date,
      },
    ];

    setTodos(newItems);
    setTextToShow(item);
    setItem("");
    setDate("");
  };

  const OnkeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">Healthy Food List</h1>

      <AppName
        item={item}
        date={date}
        setItem={setItem}
        setDate={setDate}
        addTodo={addTodo}
        OnkeyDown={OnkeyDown}
      />
      {todos.map((todo, index) => (
        <AppButton
          key={index}
          item={todo.item}
          date={todo.date}
        />
      ))}
    </div>
  );
}

export default App;