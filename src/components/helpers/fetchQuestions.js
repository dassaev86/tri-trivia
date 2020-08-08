export const fetchQuestions = async (amount, difficulty, category) => {
  let categotyUrl = "";

  if (category !== "") {
    categotyUrl = `&category=${category}`;
  }

  const url = `https://opentdb.com/api.php?amount=${amount}${categotyUrl}&difficulty=${difficulty}&type=multiple`;
  console.log(url);
  const response = await fetch(url);
  const { results } = await response.json();

  return results;
};
