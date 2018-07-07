import { createElement } from '../common/elements.js';
import { createScore } from './score.js';

export function createScoreBoard(options = {}) {
  const optsWithDefaults = {
    score: 0,
    highScore: 0,
    ...options,
  };

  const score = createScore({
    number: optsWithDefaults.score,
    title: 'score',
  });

  const highScore = createScore({
    number: optsWithDefaults.highScore,
    title: 'high',
  });

  const scoreBoard = createElement({
    className: 'snake__scoreboard',
    children: [score, highScore],
  });

  return {
    render() {
      return scoreBoard.render();
    },
    update({ newScore, newHighScore }) {
      score.update({
        newNumber: newScore,
      });

      highScore.update({
        newNumber: newHighScore,
      });
    },
  };
}
