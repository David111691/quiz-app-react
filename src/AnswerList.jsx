import Answer from "./Answer";
import styles from "./css/AnswerList.module.css";

function AnswerList({
  shuffledAnswers,
  handleClickOnAnswer,
  isAnimating,
  answerID,
}) {
  return (
    <ul className={styles.answer_list}>
      {shuffledAnswers.map((a) => (
        <Answer
          key={a.id}
          answer={a}
          handleClick={handleClickOnAnswer}
          isAnimating={isAnimating}
          answerID={answerID}
        />
      ))}
    </ul>
  );
}

export default AnswerList;
