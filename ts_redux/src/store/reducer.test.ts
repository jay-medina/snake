import { app } from './reducer';
import { startGame, newApplePosition } from './actions';

describe('app', () => {
  it('creates the app state', () => {
    const action: any = {};

    const nextState = app(undefined, action);

    expect(nextState).toMatchSnapshot();
  });
});

describe('game', () => {
  it('initializes to start', () => {
    const action: any = {};

    const nextState = app(undefined, action);
    expect(nextState.gameState).toEqual('Start');
  });

  describe('when the action is to start the game', () => {
    it('sets the game to run', () => {
      const action = startGame();

      const nextState = app(undefined, action);
      expect(nextState.gameState).toEqual('Run');
    });
  });
});

describe('apple', () => {
  it('initializes the apple', () => {
    const action: any = {};

    const nextState = app(undefined, action);
    expect(nextState.apple).toEqual({
      row: 2,
      col: 2,
    });
  });

  describe('when the action is the update the apple', () => {
    it('sets a new apple position', () => {
      const apple = { row: 0, col: 0 };
      const action = newApplePosition(apple);
      const nextState = app(undefined, action);

      expect(nextState.apple).toBe(apple);
    });
  });
});
