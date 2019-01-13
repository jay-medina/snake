jest.mock('../common/util');

import {
  startGame,
  newApplePosition,
  startGameThunk,
  tickForwardThunk,
  tickForward,
  growSnake,
  updateScore,
} from './actions';
import { findNewApplePosition, isSnakeAtPosition } from '../common/util';
import { createTestStore, MockStore } from '../common/testhelpers';

describe('startGame', () => {
  it('returns the action', () => {
    expect(startGame()).toEqual({
      type: 'START_GAME',
    });
  });
});

describe('newApplePosition', () => {
  it('returns the action', () => {
    const apple = { row: 0, col: 0 };

    expect(newApplePosition(apple)).toEqual({
      type: 'UPDATE_APPLE',
      payload: {
        apple,
      },
    });
  });
});

describe('tickForwardThunk', () => {
  const timestamp = 10;

  describe('by default', () => {
    it('ticks the game forward', () => {
      (isSnakeAtPosition as jest.Mock).mockReturnValue(() => false);

      const store = createTestStore();
      store.dispatch(tickForwardThunk(timestamp));

      expect(store.getActions()).toContainEqual(tickForward(timestamp));
    });
  });

  describe('when the snake has eaten the apple', () => {
    let actions: any[];
    const apple = { row: 0, col: 0 };

    beforeEach(() => {
      (isSnakeAtPosition as jest.Mock).mockReturnValue(() => false);

      (findNewApplePosition as jest.Mock).mockReturnValue(apple);

      const store = createTestStore();
      store.dispatch(tickForwardThunk(timestamp));

      actions = store.getActions();
    });

    fit('grows the snake', () => {
      expect(actions).toContainEqual(growSnake());
    });

    it('finds new apple', () => {
      expect(actions).toContainEqual(newApplePosition(apple));
    });

    it('updates the score', () => {
      expect(actions).toContainEqual(updateScore());
    });
  });
});

describe('startGameThunk', () => {
  const apple = { row: 0, col: 0 };
  let store: MockStore;

  beforeEach(() => {
    (findNewApplePosition as jest.Mock).mockReturnValueOnce(apple);
    store = createTestStore();
    store.dispatch(startGameThunk());
  });

  it('finds the new apple position', () => {
    expect(findNewApplePosition).toHaveBeenCalledWith(store.getState());
  });

  it('dispatches start game action', () => {
    expect(store.getActions()).toContainEqual(startGame());
  });

  it('dispatches new apple position action', () => {
    expect(store.getActions()).toContainEqual(newApplePosition(apple));
  });
});
