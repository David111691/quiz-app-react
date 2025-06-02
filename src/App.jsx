import { useState, useEffect } from "react";
import Question from "./Question";
import useQuestionStore from "./useQuestionStore";
import AnswerList from "./AnswerList";
import NextButton from "./NextButton";

import { shuffleArray } from "./assets/helpers";

import styles from "./css/App.module.css";
import ProgressBar from "./ProgressBar";

function App() {
  const { questions, isLoading, error } = useQuestionStore();
  const [appState, setAppState] = useState("ready");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [answerID, setAnswerID] = useState(-1);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (questions.length == 0) return;

    setIsAnimating(true);

    const answers = questions[currentQuestion].answers;
    setShuffledAnswers(shuffleArray(answers));

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  }, [currentQuestion, questions]);

  function handleNextQuestion() {
    setCurrentQuestion((q) => q + 1);
    setAnswerID(-1);
  }

  function handleClickOnAnswer(id) {
    setAnswerID(id);
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>LOADING</div>
      ) : (
        <>
          <Question
            question={questions[currentQuestion].question}
            isAnimating={isAnimating}
          />
          <ProgressBar
            questionsAmount={questions.length}
            currentQuestion={currentQuestion}
          />
          <AnswerList
            shuffledAnswers={shuffledAnswers}
            handleClickOnAnswer={handleClickOnAnswer}
            isAnimating={isAnimating}
            answerID={answerID}
          />
          <NextButton
            handleNextQuestion={handleNextQuestion}
            answerID={answerID}
          />
        </>
      )}
    </div>
  );
}

export default App;
