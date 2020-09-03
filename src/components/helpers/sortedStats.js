export const sortStats = (stats) => {
  const sortedStats = stats.sort(compare);

  return sortedStats;
};

const compare = (a, b) => {
  // Use toUpperCase() to ignore character casing
  const pointsA = a.points;
  const pointsB = b.points;

  let comparison = 0;
  if (pointsA > pointsB) {
    comparison = 1;
  } else if (pointsA < pointsB) {
    comparison = -1;
  }
  return comparison * -1;
};
