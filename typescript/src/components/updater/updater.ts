import { State, Apple, Snake } from '../common/types';
import { updateDirection, keyboard } from './direction';
import { getInitialSnake, randomizeApple } from '../common/util';
import { updateSnakeMovement } from './snakeMovement';
import { updateDeadSnake } from './snakeDead';
import { updateSnakeEatingApple } from './snakeEat';
import { getHighScore } from './score';

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
  const initApple: Apple = randomizeApple(initSnake, row, col);
  const highScore = getHighScore();
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

export function updateState(state: State) {
  let newState = updateDirection(state);
  newState = updateDeadSnake(newState);
  newState = updateSnakeMovement(newState);
  newState = updateSnakeEatingApple(state.snake)(newState);
  return newState;
}
