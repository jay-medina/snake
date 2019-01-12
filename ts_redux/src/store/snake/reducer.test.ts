import { snakeReducer } from './reducer';
import { Snake } from '../../common/types';

describe('snake', () => {
  const initialSnake: Snake = {
    body: [{ row: 5, col: 1 }, { row: 5, col: 2 }, { row: 5, col: 3 }],
    incrementTimer: 200,
    lastTimestamp: 0,
    direction: 'right',
  };

  it('initializes the snake', () => {
    const action: any = {};

    const snake = snakeReducer(initialSnake, action);
    expect(snake).toEqual(initialSnake);
  });
});
