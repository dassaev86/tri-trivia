export const randomizeAnswers = (correct, incorrect) => {
  let allAnswers = [];
  allAnswers = incorrect;
  allAnswers.push(correct);
  return allAnswers.sort();
};

export const randomizeCategories = () => {
  let categoriesRandomized = [];

  for (let i = 0; categoriesRandomized.length < 5; i++) {
    let category = (Math.floor(Math.random() * 24) + 9).toString();

    console.log(category);

    if (!categoriesRandomized.includes(category)) {
      categoriesRandomized.push(category.toString());
    }
  }

  return categoriesRandomized;
};
