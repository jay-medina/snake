import { createElement } from '../common/elements.js';

/**
 *
 * @param {Object} options
 * @param {number} options.col
 * @param {'apple' | 'snake'} [options.filled]
 */
export function createCol(options) {
  const optsWithDefaults = {
    col: 0,
    filled: '',
    ...options,
  };

  let className = 'snake__board-col';

  const col = createElement({
    className,
  });

  return {
    render() {
      const el = col.render();

      return el;
    },
  };
}
