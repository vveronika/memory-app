import { Score } from "types";

export const shuffleArray = (arr: any[]) => {
  return arr.sort(() => Math.random() - 0.5);
};

export function compareScores(a: Score, b: Score) {
  const scoreA = a.score;
  const scoreB = b.score;

  let comparison = 0;
  if (scoreA > scoreB) {
    comparison = 1;
  } else if (scoreA < scoreB) {
    comparison = -1;
  }
  return comparison;
}
