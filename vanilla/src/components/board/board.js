import { createElement } from '../common/elements.js';
import { createRow } from './row.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 * @param {Object[]} [options.snake]
 */
export function createBoard(options) {
  const optsWithDefaults = {
    row: 10,
    col: 10,
    snake: [],
    ...options,
  };

  const { row, col, snake } = optsWithDefaults;
  const children = [];

  for (let r = 0; r < row; r += 1) {
    children.push(createRow({ row: r, col, snake }));
  }

  const board = createElement({
    className: 'snake__board',
    children,
  });

  return {
    render() {
      const el = board.render();

      return el;
    },
  };
}
