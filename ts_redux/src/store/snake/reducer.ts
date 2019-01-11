import { Snake, TimeStamp } from '../../common/types';
import { AppAction } from '../actions';

export function isSnakeAbleToMove(snake: Snake, timestamp: TimeStamp) {
  return (
    snake.lastIncrementTimestamp === 0 ||
    timestamp - snake.lastIncrementTimestamp >= snake.incrementTimer
  );
}

export function moveSnake(snake: Snake): Snake['body'] {
  const { body, direction } = snake;
  const [head] = body;

  if (direction === 'right') {
    return [{ row: head.row, col: head.col + 1 }, ...body.slice(0, body.length - 1)];
  } else if (direction === 'left') {
    return [{ row: head.row, col: head.col - 1 }, ...body.slice(0, body.length - 1)];
  } else if (direction === 'up') {
    return [{ row: head.row - 1, col: head.col }, ...body.slice(0, body.length - 1)];
  } else {
    return [{ row: head.row + 1, col: head.col }, ...body.slice(0, body.length - 1)];
  }
}

// TODO determine if snake is ded
// TODO eating apple - increment counter
export const snakeReducer = (snake: Snake, action: AppAction): Snake => {
  if (action.type === 'TICK_TIME') {
    const { payload } = action;

    if (isSnakeAbleToMove(snake, payload.timestamp)) {
      return {
        ...snake,
        body: moveSnake(snake),
        lastIncrementTimestamp: payload.timestamp,
      };
    }
  }

  return snake;
};
