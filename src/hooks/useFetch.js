import { useState, useEffect } from "react";
import { fetchQuestions } from "../components/helpers/fetchQuestions";

export const useFetchQuestions = (amount, difficulty, category) => {
  const [state, setState] = useState({
    results: [],
    loading: true,
  });

  useEffect(() => {
    fetchQuestions(amount, difficulty, category).then((results) =>
      setState({
        results: results,
        loading: false,
      }),
    );
  }, [amount, difficulty, category]);

  return state;
};
