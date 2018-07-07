import { createElement } from '../common/elements.js';
import { createBoard } from '../board/board.js';
import { createScoreBoard } from '../scoreboard/scoreboard.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {{row: number, col: number} []} options.snake
 * @param {{row: number, col: number}} options.apple
 */
export function paintGame({ row, col, snake, apple }) {
  const board = createBoard({
    row,
    col,
    snake,
    apple,
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
    update(newOptions) {
      
    }
  };
}
