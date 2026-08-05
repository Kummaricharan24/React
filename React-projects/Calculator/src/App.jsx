import styles from './App.module.css';
import { Number } from './Number.jsx';

function App() {
  const buttons = ["1","2","3","4","5","6","7","8","9","0",".","+","-","*","/","="];

  return (
    <div className={styles.Calculator}>
      <input
        id="display"
        className={styles.display}
        type="text"
        disabled
      />

      <div className={styles.buttons}>
        {buttons.map((label, index) => (
          <Number key={index} num={label} />
        ))}
      </div>
    </div>
  );
}

export default App;