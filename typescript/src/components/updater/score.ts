const incrementor = 10;

export function incrementScore(score: number) {
  return score + incrementor;
}

export function getNewHighScore(score: number, highScore: number) {
  if (highScore < score) {
    return score;
  }

  return highScore;
}

export function storeHighScore(highScore: number) {
  localStorage.setItem('highscore', `${highScore}`);
}

export function getHighScore() {
  const item = localStorage.getItem('highscore');

  if (item) {
    return Number(item);
  }

  return 0;
}
