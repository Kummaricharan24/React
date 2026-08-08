import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";

function App() {
  const initialTodoItems = [
    { name: "Buy Milk", dueDate: "4/10/2023" },
    { name: "Go to College", dueDate: "4/10/2023" },
    { name: "Like this video", dueDate: "Right now" },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleOnNewItem = (itemName, itemDueDate) => {
    console.log(`New item added: ${itemName} Date: ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    setTodoItems(newTodoItems);
  };

  const handleOnDelete = (itemName) => {
    console.log(`Deleting item: ${itemName}`);
    const updatedTodoItems = todoItems.filter(
      (item) => item.name !== itemName
    );
    setTodoItems(updatedTodoItems);
  };

  return (
    <div>
      <AppName />
      <AddTodo onNewItem={handleOnNewItem} />
      <TodoItems todoItems={todoItems} onDeleteClick={handleOnDelete} />
    </div>
  );
}

export default App;