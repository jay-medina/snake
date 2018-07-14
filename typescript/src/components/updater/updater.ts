import { State, Apple, Snake } from '../common/types';
import { updateDirection, keyboard } from './direction';
import { getInitialSnake } from '../common/util';
import { updateSnakeMovement } from './snakeMovement';

// import { moveSnake, isSnakeAtApple, growSnake, randomizeApple, isSnakeDead, getInitialSnake } from './snakeUtil.js';
// import { getNextDirection } from './directionUtil.js';
// import { incrementScore, getNewHighScore, getHighScore, storeHighScore } from './scoreUtil.js';

export interface StateOptions {
  row: number;
  col: number;
}

/**
 * State in which the game initially starts
 */
export function getInitialState({ row, col }: StateOptions): State {
  return getNewGameState({
    row,
    col,
  });
}

/**
 * Start for starting a new game
 *
 */
export function getNewGameState({ row, col }: StateOptions): State {
  const initSnake: Snake = getInitialSnake();
  const initApple: Apple = { row: 0, col: 0 }; // randomizeApple(initSnake, row, col);
  const highScore = 100; // getHighScore();
  const score = 0;
  const timer = 200;

  // let newGameState = {
  //   current: 'run',
  // };

  // if (gameState) {
  //   newGameState = gameState;
  // }

  return {
    row,
    col,
    score,
    highScore,
    timer,
    snake: initSnake,
    apple: initApple,
    direction: keyboard.getDirection(),
    // gameState: newGameState,
  };
}

/**
 *
 * Retrieves the new set of options based on the keyboard pressed
 *
 */
export function updateState(state: State) {
  let newState = updateDirection(state);
  newState = updateSnakeMovement(newState);
  // newState = updateSnakeEatingApple(state.snake)(newState);
  // newState = updateDeadSnake(newState);
  return newState;
}

// export function isGameOver(state: State) {
//   return state.gameState.current === 'gameover';
// }

// const updateSnakeEatingApple = (oldSnake) => (state) => {
//   const { snake, apple } = state;

//   if (isSnakeAtApple(snake, apple)) {
//     const { score, highScore, row, col, timer } = state;
//     const newScore = incrementScore(score);

//     return {
//       ...state,
//       timer: updateTimer(timer),
//       snake: growSnake(snake, oldSnake),
//       apple: randomizeApple(snake, row, col),
//       score: newScore,
//       highScore: getNewHighScore(newScore, highScore),
//     };
//   }

//   return state;
// };

// function updateTimer(timer) {
//   let timerDecrementor = 2.5;
//   let timerThreshold = 40;

//   if (timer <= timerThreshold) return timerThreshold;

//   return timer - timerDecrementor;
// }

// const updateDeadSnake = (state) => {
//   const { snake, row, col, highScore } = state;

//   if (isSnakeDead(snake, row, col)) {
//     storeHighScore(highScore);

//     return {
//       ...state,
//       gameState: {
//         current: 'gameover',
//       },
//     };
//   }

//   return state;
// };
