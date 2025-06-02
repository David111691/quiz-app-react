import styles from "./css/ProgressBar.module.css";

function ProgressBar({ questionsAmount, currentQuestion }) {
  const progress = (currentQuestion / questionsAmount) * 100;

  return (
    <div className={styles.container}>
      <div className={styles.progress_container}>
        <div
          className={styles.progress_bar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className={styles.progress_amount}>
        {currentQuestion + 1} из {questionsAmount}
      </span>
    </div>
  );
}

export default ProgressBar;
