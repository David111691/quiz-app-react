import { useEffect, useState } from "react";

import styles from "./css/NextButton.module.css";

function NextButton({ handleNextQuestion, answerID }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  const wrongAnswer = answerID !== 0;
  useEffect(() => {
    // console.log(answerID);
    if (answerID !== -1) {
      setIsDisabled(false);
      setFirstRender(false);
    } else setIsDisabled(true);
  }, [answerID]);

  return (
    <div>
      <button
        className={`${styles.button} ${!isDisabled ? styles.fadeIn : ""}  ${
          isDisabled && !firstRender ? styles.fadeOut : ""
        } ${wrongAnswer ? styles.button_wrong : ""}`}
        onClick={handleNextQuestion}
        disabled={isDisabled}
        aria-hidden={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        Следующий вопрос
      </button>
    </div>
  );
}

export default NextButton;
