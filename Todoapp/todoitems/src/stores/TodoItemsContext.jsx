import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  addItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DEL_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleOnNewItem = (itemName, itemDueDate) => {
    dispatchTodoItems({
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    });
  };

  const handleOnDelete = (itemName) => {
    dispatchTodoItems({
      type: "DEL_ITEM",
      payload: { itemName },
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: todoItems,
        addItem: handleOnNewItem,
        deleteItem: handleOnDelete,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;