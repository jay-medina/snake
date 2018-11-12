// import { GameThunkAction } from './types';
// import { AppState } from './util';

interface GameAction {
  type: 'START_GAME';
}

export type AppAction = GameAction;

export const startGame = (): GameAction => ({
  type: 'START_GAME',
});

// export function randomizeApple(appState: AppState) {

// }

// export const startGameThunk = (): GameThunkAction => (dispatch) => {
//   // randomize the apple position
//   // start the game
// //  return dispatch(startGame);
// };
