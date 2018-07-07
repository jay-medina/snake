import { paintGame } from './paint.js';
import { updateState } from './updater.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {{row: number, col: number} []} options.snake
 * @param {{row: number, col: number}} options.apple
 * @param {number} options.score
 * @param {number} options.highScore
 */
export function createApp(options) {
  const initState = {
    ...options,
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
