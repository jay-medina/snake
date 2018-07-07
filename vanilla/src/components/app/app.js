import { paintGame } from './paint.js';
import { updateState } from './updater.js';
import { wireKeyboard } from '../keyboard.js';

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
  const keyboard = wireKeyboard();

  const initState = {
    ...options,
  };

  const game = paintGame(initState);
  drawToBody(game);

  gameLoop(500, game, keyboard, initState);
}

function gameLoop(timer, game, keyboard, initState) {
  setTimeout(() => {
    let direction = keyboard.getDirection();
    let state = updateState(initState, direction);
    game.update(state);
    // gameLoop(timer, game, keyboard, state);
  }, timer);
}

function drawToBody(game) {
  document.body.appendChild(game.render());
}
