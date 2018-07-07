import { createElement } from '../common/elements.js';
import { createRow } from './row.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {{row: number, col: number}} options.apple
 * @param {Object[]} [options.snake]
 */
export function createBoard(options) {
  const optsWithDefaults = {
    snake: [],
    ...options,
  };

  const { row, col, snake, apple } = optsWithDefaults;
  const children = [];

  for (let r = 0; r < row; r += 1) {
    children.push(createRow({ row: r, col, snake, apple }));
  }

  const board = createElement({
    className: 'snake__board',
    children,
  });

  return {
    render: () => board.render(),

    update({ snake, apple }) {
      children.forEach(row => {
        row.update({ snake, apple });
      });
    },
  };
}
