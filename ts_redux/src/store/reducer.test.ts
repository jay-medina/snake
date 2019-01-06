import { app } from './reducer';
import { GameState } from './util';
import { startGame } from './actions';

describe('game', () => {
  it('initializes to start', () => {
    const action: any = {};

    const nextState = app(undefined, action);
    expect(nextState.gameState).toEqual(GameState.Start);
  });

  describe('when the action is to start the game', () => {
    it('sets the game to run', () => {
      const action = startGame();

      const nextState = app(undefined, action);
      expect(nextState.gameState).toEqual(GameState.Run);
    });
  });
});

describe('apple', () => {
  it('initializes the apple', () => {
    const action: any = {};

    const nextState = app(undefined, action);
    expect(nextState.apple).toEqual({
      row: 4,
      col: 4,
    });
  });
});
