import { Direction } from './types';

/**
 * Gets the next direction for the snake
 */
export function getNextDirection(currentDirection: Direction, newDirection: Direction) {
  if (isOppositeDirection(currentDirection, newDirection)) {
    return currentDirection;
  }

  return newDirection;
}

/**
 * Determines if the newDirection is opposite of the current direction
 *
 * @param {string} currentDirection
 * @param {string} newDirection
 */
export const isOppositeDirection = (currentDirection: Direction, newDirection: Direction) => {
  return (
    (currentDirection === 'left' && newDirection === 'right') ||
    (currentDirection === 'right' && newDirection === 'left') ||
    (currentDirection === 'up' && newDirection === 'down') ||
    (currentDirection === 'down' && newDirection === 'up')
  );
};
