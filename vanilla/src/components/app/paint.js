import { createElement } from '../common/elements.js';
import { createBoard } from '../board/board.js';
import { createScoreBoard } from '../scoreboard/scoreboard.js';
import { createStartScreen, createGameOverScreen } from './screens.js';

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
 * @param {() => void} options.onStartGameClick
 */
export function paintGame({
  row,
  col,
  snake,
  apple,
  gameState,
  score,
  highScore,
  onStartGameClick,
}) {
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

  const startScreen = createStartScreen({
    onPlayClick: onStartGameClick,
  });

  const gameOverScreen = createGameOverScreen();

  let children = [scoreBoard, board, startScreen, gameOverScreen];

  const app = createElement({
    className: 'snake__app',
    children,
  });

  return {
    render: () => app.render(),

    update(newState) {
      const { score, highScore, snake, apple, gameState, onNewGameClick } = newState;

      scoreBoard.update({
        newScore: score,
        newHighScore: highScore,
      });

      board.update({
        snake,
        apple,
      });

      startScreen.update();

      if (gameState.current === 'gameover') {
        gameOverScreen.update({
          onNewGameClick,
        });
      }
    },
  };
}
