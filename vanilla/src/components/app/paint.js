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
 * @param {Object} options.gameState
 * @param {number} options.score
 * @param {number} options.highScore
 */
export function paintGame({ row, col, snake, apple, gameState, score, highScore }) {
  const board = createBoard({
    row,
    col,
    snake,
    apple,
  });

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
    render: () => app.render(),

    update(newState) {
      const { score, highScore, snake, apple } = newState;

      scoreBoard.update({
        newScore: score,
        newHighScore: highScore,
      });

      board.update({
        snake,
        apple,
      });
    },
  };
}
