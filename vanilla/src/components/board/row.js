import { createElement } from '../common/elements.js';
import { createCol } from './col.js';
import { isSnakeAtPosition, isTheApple } from '../app/snakeUtil.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {Object[]} options.snake
 * @param {{row: number, col: number}} options.apple
 */
export function createRow({ row, col, snake, apple }) {
  const children = [];

  for (let c = 0; c < col; c += 1) {
    let col = createCol({
      col: c,
      filled: getFilled(snake, apple, row, c),
    });

    children.push(col);
  }

  const boardRow = createElement({
    className: 'snake__board-row',
    children,
  });

  return {
    render: () => boardRow.render(),

    update({ snake, apple }) {
      children.forEach((col, c) => {
        const filled = getFilled(snake, apple, row, c);
        col.update({ filled });
      });
    },
  };
}

function getFilled(snake, apple, row, c) {
  if (isSnakeAtPosition(snake, row, c)) {
    return 'snake';
  }

  if (isTheApple(apple, row, c)) {
    return 'apple';
  }
}
