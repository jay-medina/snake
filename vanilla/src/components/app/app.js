import { createElement } from '../common/elements.js';
import { createBoard } from '../board/board.js';
import { createScoreBoard } from '../scoreboard/scoreboard.js';
import { getInitialSnake } from './snakeUtil.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 */
export function createApp({ row, col }) {
  const snake = getInitialSnake();

  const board = createBoard({
    row,
    col,
    snake,
  });

  const score = 0;
  const highScore = 10;

  const scoreBoard = createScoreBoard({
    score,
    highScore,
  });

  const children = [scoreBoard, board];

  const app = createElement({
    className: 'snake__app',
    children,
  });

  return {
    render() {
      const el = app.render();

      return el;
    },
  };
}
