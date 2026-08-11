
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../stores/TodoItemsContext";

function TodoItems() {
  const { items, deleteItem } = useContext(TodoItemsContext);
  console.log("DEBUG items:", items);   // add this line

  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;