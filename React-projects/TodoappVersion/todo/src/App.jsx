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


    

    setTodoItems((currValue) => [...currValue,
      {name: itemName, dueDate: itemDueDate },
    ]);
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
      
      <EmptyApp todoItems={todoItems} />
    
      <TodoItems todoItems={todoItems} onDeleteClick={handleOnDelete} />
   
    </center>
  );
}

export default App;