import { paintGame } from './paint.js';
import { updateState } from './updater.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {{row: number, col: number} []} options.snake
 * @param {{row: number, col: number}} options.apple
 */
export function createApp({ row, col, snake, apple }) {
  const initState = {
    row,
    col,
    snake,
    apple,
  };

  const game = paintGame(initState);
  drawToBody(game);

  gameLoop(1000, game, initState);
}

function gameLoop(timer, game, initState) {
  setTimeout(() => {
    let state = updateState(initState, 'right');
    game.update(state);
  }, timer);
}

function drawToBody(game) {
  document.body.appendChild(game.render());
}
