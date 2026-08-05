import { Fragment } from 'react';
import './App.css'
import { FoodItem } from './Fooditems.jsx';
import { Heading } from './FoodHeading.jsx';
import { Condition } from './Condition.jsx';

function App() {
  let FoodItems = ["delicious", "tasty", "yummy", "spicy", "sweet", "sour", "bitter", "salty"];

  return (
    <Fragment>
      <Heading />
      <Condition items={FoodItems} />
      <FoodItem items={FoodItems} />
    </Fragment>
  )
}

export default App;