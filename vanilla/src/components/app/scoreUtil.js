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

export function storeHighScore(highScore) {
  localStorage.setItem('highscore', `${highScore}`);
}

export function getHighScore() {
  const item = localStorage.getItem('highscore');

  if (item) {
    return Number(item);
  }

  return 0;
}
