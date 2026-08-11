import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import "./App.css";
import EmptyApp from "./components/Appempty";

function App() {
  const initialTodoItems = [
    
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleOnNewItem = (itemName, itemDueDate) => {


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
    
    const updatedTodoItems = todoItems.filter(
      (item) => item.name !== itemName
    );
    setTodoItems(updatedTodoItems);
  };

  return (
    <center>
      <AppName />
      <AddTodo onNewItem={handleOnNewItem} />
      {todoItems.length === 0 ? (
      <EmptyApp />
    ) : (
      <TodoItems todoItems={todoItems} onDeleteClick={handleOnDelete} />
    )}
    </center>
  );
}

export default App;