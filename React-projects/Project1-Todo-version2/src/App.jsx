import { useState } from "react";
import AppButton from "./AppButton";
import AppName from "./AppName";
import FoodInput from "./FoodItem";

function App() {
  const [todos, setTodos] = useState([
    {
      item: "Butter Milk",
      date: "16-12-2005",
    },
    {
      item: "I Love Cherry",
      date: "16-12-2005",
    },
    {
      item: "Market",
      date: "16-12-2005",
    },
  ]);
{/*
  let TextStatearr = useState("Enter your item in List items");
  let textToShow = TextStatearr[0];
  let setTextToShow = TextStatearr[1];

*/}
  const [textToShow, setTextToShow] = useState("Enter your item in List items");
  const OnkeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems =[...todos, { item: newFoodItem, date: new Date().toLocaleDateString() }];
      setTodos(newItems);
      event.target.value = "";
      console.log(newFoodItem);
      setTextToShow(newFoodItem);
    }
  };


  return (
    <>
    <div className="container">
      <h1 className="text-center my-3">Healthy Food List</h1>
      <AppName />
      <FoodInput handleKeyDown={OnkeyDown} />
      <p>{textToShow}</p>
      {todos.map((todo, index) => (
        <AppButton key={index}item={todo.item}date={todo.date}  />
      ))}
    </div>
    </>
  );
}

export default App;