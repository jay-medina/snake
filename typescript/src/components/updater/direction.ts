import { Direction, State } from '../common/types';
import { wireKeyboard } from '../common/keyboard';

export const keyboard = wireKeyboard();

export const updateDirection = (state: State): State => {
  const { direction } = state;
  const newDirection = keyboard.getDirection();

  const nextDirection = getNextDirection(direction, newDirection);

  return {
    ...state,
    direction: nextDirection,
  };
};

/**
 * Gets the next direction for the snake
 */
function getNextDirection(direction: Direction, newDirection: Direction) {
  if (isOppositeDirection(direction, newDirection)) {
    return direction;
  }

  return newDirection;
}

/**
 * Determines if the newDirection is opposite of the current direction
 *
 * @param {string} direction
 * @param {string} newDirection
 */
const isOppositeDirection = (direction: Direction, newDirection: Direction) => {
  return (
    (direction === 'left' && newDirection === 'right') ||
    (direction === 'right' && newDirection === 'left') ||
    (direction === 'up' && newDirection === 'down') ||
    (direction === 'down' && newDirection === 'up')
  );
};
