import { getInitialSnake, randomizeApple } from './snakeUtil.js';
import { paintGame } from './paint.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 */
export function createApp({ row, col }) {
  const snake = getInitialSnake();
  const apple = randomizeApple(snake, row, col);

  const initState = {
    row,
    col,
    snake,
    apple,
  };

  gameLoop(200, initState);
}

function gameLoop(timer, state) {
  setTimeout(() => {
    const game = paintGame(state);
    drawToBody(game);
  }, timer);
}

function drawToBody(game) {
  document.body.appendChild(game.render());
}

function updateState(state) {
  return state;
}
