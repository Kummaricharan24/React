
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../stores/TodoItemsContext";

function TodoItems() {
  const { item } = useContext(TodoItemsContext);


  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          
        
        />
      ))}
    </div>
  );
}

export default TodoItems;