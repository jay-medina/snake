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

// export function createGameOverScreen({ onPlayClick }) {
//   const title = createElement({
//     innerText: 'Game Over',
//     className: 'snake__game-over-title',
//   });

//   const playButton = createPlayButton({
//     text: 'Play Again',
//     onClick: onPlayClick,
//   });

//   const gameOverScreen = createElement({
//     className: 'snake__game-over-screen',
//     children: [title, playButton],
//   });

//   return gameOverScreen;
// }

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
