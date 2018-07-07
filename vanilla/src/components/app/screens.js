import { createElement } from '../common/elements.js';

export function createStartScreen({ onPlayClick }) {
  const title = createElement({
    innerText: 'Snake',
    className: 'snake__start-screen-title',
  });

  const playButton = createPlayButton({
    onClick: onPlayClick,
    text: 'Play',
  });

  let className = 'snake__start-screen';

  const startScreen = createElement({
    className,
    children: [title, playButton],
  });

  return {
    render: () => startScreen.render(),
    update() {
      startScreen.update({
        className: `${className} hide`,
      });
    },
  };
}

export function createGameOverScreen() {
  let options = {
    onPlayClick: () => {},
  };

  const title = createElement({
    innerText: 'Game Over',
    className: 'snake__game-over-title',
  });

  const playButton = createPlayButton({
    text: 'Play Again',
    onClick: () => {
      options.onPlayClick();
    },
  });

  let className = 'snake__game-over-screen';

  const gameOverScreen = createElement({
    className: `${className} hide`,
    children: [title, playButton],
  });

  return {
    render: () => gameOverScreen.render(),
    update({ onNewGameClick }) {
      options.onPlayClick = this.cleanUp(onNewGameClick);

      gameOverScreen.update({
        className,
      });
    },
    cleanUp: onClick => () => {
      options.onPlayClick = () => {};

      gameOverScreen.update({
        className: `${className} hide`,
      });

      onClick();
    },
  };
}

function createPlayButton({ onClick, text }) {
  const playButton = createElement({
    el: 'button',
    innerText: text,
    className: 'snake__start-screen-play',
    onClick,
  });

  const playButtonContainer = createElement({
    className: 'snake__start-screen-play-container',
    children: [playButton],
  });

  return playButtonContainer;
}
