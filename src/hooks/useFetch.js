import { useState, useEffect } from "react";
import { fetchQuestions } from "../components/helpers/fetchQuestions";

export const useFetchQuestions = () => {
  const [state, setState] = useState({
    results: [],
    loading: true,
  });

  useEffect(() => {
    fetchQuestions().then((results) =>
      setState({
        results: results,
        loading: false,
      }),
    );
  }, []);

  return state;
};
