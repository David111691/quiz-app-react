import { useState, useEffect } from "react";

function useQuestionStore() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:3000/questions");
        const data = await res.json();

        // console.log("res", res);
        // console.log("data", data);

        const questionsWithIDs = data.map((q) => ({
          ...q,
          answers: q.answers.map((a, i) => ({ answer: a, id: i })),
        }));

        setQuestions(questionsWithIDs);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  return { questions, isLoading, error };
}

export default useQuestionStore;
