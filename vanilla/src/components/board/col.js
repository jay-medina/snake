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

  const col = createElement({
    className: getClassName(filled),
  });

  return {
    render: () => col.render(),

    update({ filled }) {
      col.update({
        className: getClassName(filled),
      });
    },
  };
}

function getClassName(filled = '') {
  let className = 'snake__board-col';

  if (filled === 'apple') {
    return `${className} snake__board-col-apple`;
  }

  if (filled === 'snake') {
    return `${className} snake__board-col-snake`;
  }

  return className;
}
