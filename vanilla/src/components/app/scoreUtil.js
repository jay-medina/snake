const incrementor = 10;

export function incrementScore(score) {
  return score + incrementor;
}

export function getNewHighScore(score, highScore) {
  if (highScore < score) {
    return score;
  }

  return highScore;
}
