import { createElement } from '../common/elements.js';

export function createScore(options = {}) {
  const optsWithDefaults = {
    number: 0,
    title: '',
    ...options,
  };

  const title = createElement({
    className: 'snake__score-title',
    innerText: optsWithDefaults.title,
  });

  const number = createElement({
    className: 'snake__score-number',
    innerText: `${optsWithDefaults.number}`,
  });

  const score = createElement({
    className: 'snake__score',
    children: [title, number],
  });

  return {
    render() {
      return score.render();
    },
    update({ newNumber }) {
      number.update({
        innerText: newNumber,
      });
    },
  };
}
