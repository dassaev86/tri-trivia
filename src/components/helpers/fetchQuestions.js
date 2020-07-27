export const fetchQuestions = async () => {
  const url = `https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`;
  const response = await fetch(url);
  const { results } = await response.json();

  return results;
};
