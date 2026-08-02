import { Item } from './Item.jsx';

const FoodItem = (props) => {
  return (
    <ul className="list-group  ">
      {props.items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </ul>
  );
};

export { FoodItem };