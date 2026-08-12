import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import EmptyApp from "./components/Appempty";
import TodoItemsContextProvider from "./stores/TodoItemsContext";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppName />
        <AddTodo />
        <EmptyApp />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;