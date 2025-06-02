import styles from "./css/Answer.module.css";

function Answer({ answer, handleClick, isAnimating, answerID }) {
  const isRight = answer.id == 0;

  // console.log(answer, " ", isRight, answerID);

  return (
    <li>
      <button
        className={`${styles.button} ${isAnimating ? styles.fadeIn : ""} ${
          answerID !== -1
            ? isRight
              ? styles.button_right
              : styles.button_wrong
            : ""
        }`}
        onClick={() => handleClick(answer.id)}
      >
        {answer.answer}
      </button>
    </li>
  );
}

export default Answer;
