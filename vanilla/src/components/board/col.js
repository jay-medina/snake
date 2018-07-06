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

  const { filled } = optsWithDefaults;

  let className = 'snake__board-col';

  if (filled === 'apple') {
    className = `${className} snake__board-col-apple`;
  }

  if (filled === 'snake') {
    className = `${className} snake__board-col-snake`;
  }

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
