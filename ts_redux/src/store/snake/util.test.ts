import { createMockSnake } from '../../common/testhelpers';
import { Snake } from '../../common/types';
import { isSnakeAbleToMove, moveSnake, isOppositeDirection } from './util';

describe('isSnakeAbleToMove', () => {
  let snake: Snake;

  beforeEach(() => {
    snake = createMockSnake();
  });

  it('yes when last timestamp is 0', () => {
    snake.lastTimestamp = 0;
    const result = isSnakeAbleToMove(snake, 10);
    expect(result).toBe(true);
  });

  it('yes when enough time has passed from the last timestamp', () => {
    snake.lastTimestamp = 10;
    const result = isSnakeAbleToMove(snake, 300);
    expect(result).toBe(true);
  });

  it('no otherwise', () => {
    snake.lastTimestamp = 10;
    const result = isSnakeAbleToMove(snake, 100);
    expect(result).toBe(false);
  });
});

describe('moveSnake', () => {
  let snake: Snake;

  beforeEach(() => {
    snake = createMockSnake();
    snake.body = [{ row: 5, col: 3 }, { row: 5, col: 2 }, { row: 5, col: 1 }];
  });

  it('updates the head with the direction: right', () => {
    snake.direction = 'right';
    const newBody = moveSnake(snake);
    expect(newBody).toEqual([{ row: 5, col: 4 }, { row: 5, col: 3 }, { row: 5, col: 2 }]);
  });

  it('updates the head with the direction: left', () => {
    snake.direction = 'left';
    snake.body = snake.body.reverse();
    const newBody = moveSnake(snake);
    expect(newBody).toEqual([{ row: 5, col: 0 }, { row: 5, col: 1 }, { row: 5, col: 2 }]);
  });

  it('updates the head with the direction: up', () => {
    snake.direction = 'up';
    const newBody = moveSnake(snake);
    expect(newBody).toEqual([{ row: 4, col: 3 }, { row: 5, col: 3 }, { row: 5, col: 2 }]);
  });

  it('updates the head with the direction: down', () => {
    snake.direction = 'down';
    const newBody = moveSnake(snake);
    expect(newBody).toEqual([{ row: 6, col: 3 }, { row: 5, col: 3 }, { row: 5, col: 2 }]);
  });
});

describe('isOppositeDirection', () => {
  it('false when the directions are the same', () => {
    expect(isOppositeDirection('left', 'left')).toBe(false);
    expect(isOppositeDirection('up', 'up')).toBe(false);
    expect(isOppositeDirection('down', 'down')).toBe(false);
    expect(isOppositeDirection('right', 'right')).toBe(false);
  });

  it('false when directions are different', () => {
    expect(isOppositeDirection('right', 'up')).toBe(false);
    expect(isOppositeDirection('down', 'left')).toBe(false);
  });

  it('true when they are opposite', () => {
    expect(isOppositeDirection('left', 'right')).toBe(true);
    expect(isOppositeDirection('right', 'left')).toBe(true);
    expect(isOppositeDirection('up', 'down')).toBe(true);
    expect(isOppositeDirection('down', 'up')).toBe(true);
  });
});
