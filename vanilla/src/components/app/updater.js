import { moveSnake } from './snakeUtil.js';
import { getNextDirection } from './directionUtil.js';

/**
 *
 * Retrieves the new set of options based on the keyboard pressed
 *
 */
export function updateState(state, newDirection) {
  const { snake, currentDirection } = state;

  const nextDirection = getNextDirection(currentDirection, newDirection);
  const newSnake = moveSnake(snake, nextDirection);

  return {
    ...state,
    currentDirection: nextDirection,
    snake: newSnake,
  };
}
