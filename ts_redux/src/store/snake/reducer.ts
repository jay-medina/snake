import { Snake } from '../../common/types';
import { AppAction } from '../actions';
import { isSnakeAbleToMove, moveSnake, isOppositeDirection } from './util';

function updateDirection(snake: Snake): Snake {
  if (snake.newDirection) {
    return {
      ...snake,
      direction: snake.newDirection,
      newDirection: undefined,
    };
  }

  return snake;
}

// TODO determine if snake is ded
export const snakeReducer = (snake: Snake, action: AppAction): Snake => {
  if (action.type === 'TICK_TIME') {
    const { payload } = action;
    const newSnake = updateDirection(snake);

    if (isSnakeAbleToMove(newSnake, payload.timestamp)) {
      return {
        ...newSnake,
        body: moveSnake(newSnake),
        lastTimestamp: payload.timestamp,
      };
    }
  }

  if (action.type === 'UPDATE_SNAKE_DIRECTION') {
    const { payload } = action;

    if (!isOppositeDirection(snake.direction, payload.direction)) {
      return {
        ...snake,
        newDirection: payload.direction,
      };
    }
  }

  if (action.type === 'UPDATE_SNAKE_SIZE') {
    const newSnake = updateDirection(snake);
    const { body } = newSnake;
    const lastPosition = body[body.length - 1];

    return {
      ...newSnake,
      body: [...body, lastPosition],
    };
  }

  return snake;
};
