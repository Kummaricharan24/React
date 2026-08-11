import { TodoItemsContext } from "../stores/TodoItemsContext";
import { useContext } from "react";

function EmptyApp() {
  const{items} = useContext(TodoItemsContext);
  return items.length === 0 && <h1>Empty TodoList</h1>;
}

export default EmptyApp;