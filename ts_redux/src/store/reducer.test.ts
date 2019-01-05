import { game } from './reducer';
import { GameState } from './util';
import { startGame } from './actions';

describe('game', () => {
  it('initializes to start', () => {
    const action: any = {};

    const nextState = game(undefined, action);
    expect(nextState).toEqual({
      gameState: GameState.Start,
    });
  });

  describe('when the action is to start the game', () => {
    it('sets the game to run', () => {
      const action = startGame();

      const nextState = game(undefined, action);
      expect(nextState).toEqual({
        gameState: GameState.Run,
      });
    });
  });
});
