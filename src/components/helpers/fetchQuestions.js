export const fetchQuestions = async (amount, difficulty, category) => {
  let categotyUrl = "";
  let difficultyUrl = "";

  if (category !== "") {
    categotyUrl = `&category=${category}`;
  }

  if (difficulty !== "all") {
    difficultyUrl = `&difficulty=${difficulty}`;
  }

  const url = `https://opentdb.com/api.php?amount=${amount}${categotyUrl}${difficultyUrl}&type=multiple`;
  console.log(url);
  const response = await fetch(url);
  const { results } = await response.json();

  return results;
};
