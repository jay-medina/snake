import { AppState, GameState } from './util';

export const getInitialState = (): AppState => ({
  dimensions: {
    cols: 25,
    rows: 25,
  },
  apple: {
    row: 4,
    col: 4,
  },
  gameState: GameState.Start,
});
