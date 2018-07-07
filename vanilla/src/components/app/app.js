import { paintGame } from './paint.js';
import { updateState, isGameOver, getInitialState } from './updater.js';
import { wireKeyboard } from '../keyboard.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 */
export function createApp(options) {
  const keyboard = wireKeyboard();

  const initState = getInitialState(options);

  const onStartGameClick = () => {
    gameLoop(screen, keyboard, initState);
  };

  const screen = paintGame({
    row: initState.row,
    col: initState.col,
    snake: initState.snake,
    apple: initState.apple,
    gameState: initState.gameState,
    score: initState.score,
    highScore: initState.highScore,
    onStartGameClick,
  });

  drawToBody(screen);
}

function gameLoop(screen, keyboard, initState) {
  setTimeout(() => {
    let direction = keyboard.getDirection();
    let state = updateState(initState, direction);
    screen.update(state);

    if (isGameOver(state)) {
      screen.update({
        ...state,
        onNewGameClick: () => {
          keyboard.resetDirection();
          gameLoop(screen, keyboard, getInitialState(state));
        },
      });
    } else {
      gameLoop(screen, keyboard, state);
    }
  }, initState.timer);
}

function drawToBody(screen) {
  document.body.appendChild(screen.render());
}
