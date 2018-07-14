import { Direction, Snake, State } from '../common/types';
import { isSnakeDead } from '../common/util';

export const updateSnakeMovement = (state: State): State => {
  const { snake, direction } = state;

  if (isSnakeDead(snake, state.row, state.col)) {
    return state;
  }

  const newSnake = moveSnake(snake, direction);

  return {
    ...state,
    snake: newSnake,
  };
};

export function moveSnake(snake: Snake, direction: Direction) {
  const [head] = snake;

  if (direction === 'right') {
    return [{ row: head.row, col: head.col + 1 }, ...snake.slice(0, snake.length - 1)];
  }

  if (direction === 'left') {
    return [{ row: head.row, col: head.col - 1 }, ...snake.slice(0, snake.length - 1)];
  }

  if (direction === 'up') {
    return [{ row: head.row - 1, col: head.col }, ...snake.slice(0, snake.length - 1)];
  }

  if (direction === 'down') {
    return [{ row: head.row + 1, col: head.col }, ...snake.slice(0, snake.length - 1)];
  }

  return snake;
}
