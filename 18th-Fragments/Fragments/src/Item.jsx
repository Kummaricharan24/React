import styles from "./Item.module.css";
function Item(props) {
  return (
    <li className={styles.container + " list-group-item"}>{props.item}</li>
  );
}

export { Item };