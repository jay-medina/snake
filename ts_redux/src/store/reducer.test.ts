import { game, apple } from './reducer';
import { GameState } from './util';
import { startGame } from './actions';

describe('game', () => {
  it('initializes to start', () => {
    const action: any = {};

    const nextState = game(undefined, action);
    expect(nextState).toEqual(GameState.Start);
  });

  describe('when the action is to start the game', () => {
    it('sets the game to run', () => {
      const action = startGame();

      const nextState = game(undefined, action);
      expect(nextState).toEqual(GameState.Run);
    });
  });
});

describe('apple', () => {
  it('initializes the apple', () => {
    const action: any = {};

    const nextState = apple(undefined, action);
    expect(nextState).toEqual({
      row: 2,
      col: 2,
    });
  });
});
