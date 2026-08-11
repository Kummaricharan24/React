import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import {  useState } from "react";
import "./App.css";
import EmptyApp from "./components/Appempty";
import { TodoItemsContext } from "./stores/TodoItemsContext";
function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleOnNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleOnDelete = (itemName) => {
  setTodoItems((currValue) =>
    currValue.filter((item) => item.name !== itemName)
  );
};

  return (
    <TodoItemsContext.Provider
    value={{
      items: todoItems,
      addItem: handleOnNewItem,
      deleteItem: handleOnDelete,
    }}>
      <center>
        <AppName />
        <AddTodo  />
        <EmptyApp />
        <TodoItems  />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;