export const fetchQuestions = async (amount, difficulty, category) => {
  let categotyUrl = "";
  let difficultyUrl = "";

  // Token Logic

  let token = localStorage.getItem("token");
  const response_code = await checkToken(token);

  if (response_code === 3 || response_code === 4) {
    const newToken = await generateToken();
    localStorage.setItem("token", newToken);
    token = newToken;
  }

  // Token Logic

  if (category !== "") {
    categotyUrl = `&category=${category}`;
  }

  if (difficulty !== "all") {
    difficultyUrl = `&difficulty=${difficulty}`;
  }

  const url = `https://opentdb.com/api.php?amount=${amount}${categotyUrl}${difficultyUrl}&type=multiple&encode=base64&token=${token}`;

  const response = await fetch(url);
  const { results } = await response.json();

  return results;
};

const generateToken = async () => {
  const url = "https://opentdb.com/api_token.php?command=request";

  const response = await fetch(url);
  const { token } = await response.json();

  return token;
};

const checkToken = async (token) => {
  const url = `https://opentdb.com/api.php?amount=10&token=${token}`;

  const response = await fetch(url);
  const { response_code } = await response.json();

  return response_code;
};
