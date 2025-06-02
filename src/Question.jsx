import styles from "./css/Question.module.css";

function Question({ question, isAnimating }) {
  return (
    <div className={`${styles.question} ${isAnimating ? styles.fadeIn : ""}`}>
      <span>{question}</span>
    </div>
  );
}

export default Question;
