import { State } from '../common/types';
import { isSnakeDead } from '../common/util';
import { storeHighScore } from './score';

export const updateDeadSnake = (state: State): State => {
  const { snake, row, col, highScore } = state;

  if (isSnakeDead(snake, row, col)) {
    storeHighScore(highScore);

    return {
      ...state,
      // gameState: {
      //   current: 'gameover',
      // },
    };
  }

  return state;
};
