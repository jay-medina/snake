import { moveSnake, isSnakeAtApple, growSnake, randomizeApple } from './snakeUtil.js';
import { getNextDirection } from './directionUtil.js';
import { incrementScore, getNewHighScore } from './scoreUtil.js';

/**
 *
 * Retrieves the new set of options based on the keyboard pressed
 *
 */
export function updateState(state, newDirection) {
  const updateEatApple = updateSnakeEatingApple(state.snake);

  return updateEatApple(updateSnakeDirection(state, newDirection));
}

const updateSnakeDirection = (state, newDirection) => {
  const { snake, currentDirection } = state;

  const nextDirection = getNextDirection(currentDirection, newDirection);
  const newSnake = moveSnake(snake, nextDirection);

  return {
    ...state,
    currentDirection: nextDirection,
    snake: newSnake,
  };
};

const updateSnakeEatingApple = oldSnake => state => {
  const { snake, apple } = state;

  if (isSnakeAtApple(snake, apple)) {
    const { score, highScore, row, col } = state;
    const newScore = incrementScore(score);

    return {
      ...state,
      snake: growSnake(snake, oldSnake),
      apple: randomizeApple(snake, row, col),
      score: newScore,
      highScore: getNewHighScore(newScore, highScore),
    };
  }

  return state;
};
