import { Direction } from './types';

export const wireKeyboard = () => {
  let current: Direction = 'right';

  setUpKeyboardListeners((keyCode: number) => {
    const newDirection = mapArrowKeysToDirection(keyCode);

    if (newDirection) {
      current = newDirection;
    }
  });

  return {
    getDirection(): Direction {
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
const mapArrowKeysToDirection = (keyCode: number): Direction | null => {
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
      return null;
  }
};

type NewDirectionCB = (keyCode: number) => void;

/**
 * Sets up the arrow key listener on the body element
 *
 */
const setUpKeyboardListeners = (newDirectionCb: NewDirectionCB) => {
  document.body.addEventListener('keydown', (e) => {
    newDirectionCb(e.keyCode);
  });
};
