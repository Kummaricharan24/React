import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./Component/Display.jsx";
import ButtonContainer from "./Component/ButtonContainer.jsx";

function App() {
  const [expression,setexpression] = useState("");
  const handleButtonClick = (val) => {
  if (val === "c") {
    setexpression("");
  } else if (val === "=") {
    const result = eval(expression);
    setexpression(result.toString());
  } else {
    setexpression((prev) => prev + val);
  }
};

  return (
    <div className={styles.Calculator}>
      <Display value={expression} />
      <ButtonContainer
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}

export default App;