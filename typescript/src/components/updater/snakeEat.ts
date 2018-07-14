import { Snake, State } from '../common/types';
import { isSnakeAtApple, randomizeApple } from '../common/util';
import { getNewHighScore, incrementScore } from './score';
import { updateTimer } from './timer';

export const updateSnakeEatingApple = (oldSnake: Snake) => (state: State) => {
  const { snake, apple } = state;

  if (isSnakeAtApple(snake, apple)) {
    const { score, highScore, row, col, timer } = state;
    const newScore = incrementScore(score);

    return {
      ...state,
      timer: updateTimer(timer),
      snake: growSnake(snake, oldSnake),
      apple: randomizeApple(snake, row, col),
      score: newScore,
      highScore: getNewHighScore(newScore, highScore),
    };
  }

  return state;
};

/**
 * Increases the size of the snake
 */
export function growSnake(snake: Snake, oldSnake: Snake) {
  const lastPosition = oldSnake[oldSnake.length - 1];

  return [...snake, lastPosition];
}
