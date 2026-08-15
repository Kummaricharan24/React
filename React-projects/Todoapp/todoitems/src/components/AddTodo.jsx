import { useRef,useContext} from "react";
import { IoAdd } from "react-icons/io5";
import { TodoItemsContext } from "../stores/TodoItemsContext";


function AddTodo() {
  const { addItem } = useContext(TodoItemsContext);
  const todoNameelement=useRef();
  const dueDatelement=useRef();

  

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const itemName=todoNameelement.current.value;
    const dueDate=dueDatelement.current.value;
    console.log(itemName,dueDate);
    if (!itemName) return;
   addItem(itemName, dueDate);
    todoNameelement.current.value=("");
    dueDatelement.current.value=("");
  };

  return (
    <form className="container text-center" onSubmit={handleAddButtonClicked}>
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameelement}
            placeholder="Enter Todo Here"
            
            
          />
        </div>

        <div className="col-4">
          <input type="date" 
          ref={dueDatelement}
            />
        </div>

        <div className="col-2">
          <button
          
            className="btn btn-success kg-button"
           
          >
            <IoAdd />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;