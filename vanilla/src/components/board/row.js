import { createElement } from '../common/elements.js';
import { createCol } from './col.js';
import { isSnakeAtPosition } from '../app/snakeUtil.js';

function isTheApple(apple, row, col) {
  return row === apple.row && col === apple.col;
}

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {Object[]} options.snake
 * @param {{row: number, col: number}} options.apple
 */
export function createRow(options) {
  const optsWithDefaults = {
    row: 10,
    col: 10,
    ...options,
  };

  const { row, col, snake, apple } = optsWithDefaults;
  const children = [];

  for (let c = 0; c < col; c += 1) {
    let col;

    if (isSnakeAtPosition(snake, row, c)) {
      col = createCol({ col: c, filled: 'snake' });
    } else if (isTheApple(apple, row, c)) {
      col = createCol({ col: c, filled: 'apple' });
    } else {
      col = createCol({ col: c });
    }

    children.push(col);
  }

  const boardRow = createElement({
    className: 'snake__board-row',
    children,
  });

  return {
    render() {
      const el = boardRow.render();

      return el;
    },
  };
}
