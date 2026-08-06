import styles from "../App.module.css";

function ButtonContainer({onButtonClick}) {
  const buttons = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
    ".", "+", "c", "*", "/", "="
  ];

  return (
    <div className={styles.buttons}>
      {buttons.map((buttonName, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;