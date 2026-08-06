import styles from './App.module.css';

function Number({ num , onButtonClick }) {
  return (
    <button className={styles.button} onClick={() => onButtonClick(num)}>
      {num}
    </button>
  );
}

export { Number };