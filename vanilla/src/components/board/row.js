import { createElement } from '../common/elements.js';
import { createCol } from './col.js';

/**
 *
 * @param {Object} options
 * @param {number} options.row
 * @param {number} options.col
 */
export function createRow(options) {
  const optsWithDefaults = {
    row: 10,
    col: 10,
    ...options,
  };

  const { col } = optsWithDefaults;
  const children = [];

  for (let c = 0; c < col; c += 1) {
    let col = createCol({
      col: c,
    });
    children.push(col);
  }

  const row = createElement({
    className: 'snake__board-row',
    children,
  });

  return {
    render() {
      const el = row.render();

      return el;
    },
  };
}
