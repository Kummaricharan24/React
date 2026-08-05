import styles from './App.module.css';

function Number({ num }) {
  return (
    <button className={styles.button}>{num}</button>
    
  );
}

export { Number };