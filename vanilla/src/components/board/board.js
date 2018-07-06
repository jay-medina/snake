import { createElement } from '../common/elements.js';
import { createRow } from './row.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 */
export function createBoard(options) {
  const optsWithDefaults = {
    row: 10,
    col: 10,
    ...options,
  };

  const { row, col } = optsWithDefaults;
  const children = [];

  for (let r = 0; r < row; r += 1) {
    children.push(createRow({ row: r, col }));
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
