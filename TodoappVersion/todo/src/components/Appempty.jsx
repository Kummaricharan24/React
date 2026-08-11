

function EmptyApp({todoItems}) {
  return (
    todoItems.length===0 && <h1 style={{color:"red"}}>Empty TodoList</h1>
  );
}
export default EmptyApp;
