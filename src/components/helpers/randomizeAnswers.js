export const randomizeAnswers = (correct, incorrect) => {
  let allAnswers = [];
  allAnswers = incorrect;
  allAnswers.push(correct);
  return allAnswers.sort();
};
