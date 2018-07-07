export const wireKeyboard = () => {
  let current = 'right';

  setUpKeyboardListeners(keyCode => {
    const newDirection = mapArrowKeysToDirection(keyCode);

    if (newDirection) {
      current = newDirection;
    }
  });

  return {
    getDirection() {
      return current;
    },
    resetDirection() {
      current = 'right';
    },
  };
};

const LEFT = 37;
const UP = 38;
const RIGHT = 39;
const DOWN = 40;
const A = 65;
const W = 87;
const D = 68;
const S = 83;

/**
 * Maps the keycode to directions
 */
const mapArrowKeysToDirection = keyCode => {
  switch (keyCode) {
    case LEFT:
    case A:
      return 'left';
    case UP:
    case W:
      return 'up';
    case RIGHT:
    case D:
      return 'right';
    case DOWN:
    case S:
      return 'down';
    default:
      return '';
  }
};

/**
 * Sets up the arrow key listener on the body element
 *
 * @param {(keyCode: number) => void} newDirectionCb
 */
const setUpKeyboardListeners = newDirectionCb => {
  document.body.addEventListener('keydown', e => {
    newDirectionCb(e.keyCode);
  });
};
