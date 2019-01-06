jest.mock('../../common/util');

import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { GameState, AppState } from '../../common/types';
import TransitionScreen from './TransitionScreen';
import { Provider } from 'react-redux';
import { startGame, startGameThunk } from '../../store/actions';
import {
  createMockState,
  createMockStore,
  StoreCreator,
  MockStore,
} from '../../common/testhelpers';

type noop = () => void;

describe('<TransitionScreen />', () => {
  let wrapper: ReactWrapper;
  let mockState: AppState;
  let storeCreator: StoreCreator;
  let store: MockStore;

  beforeEach(() => {
    mockState = createMockState();
    storeCreator = createMockStore();
  });

  describe('when the game is running', () => {
    beforeEach(() => {
      store = storeCreator({
        ...mockState,
        gameState: GameState.Run,
      });

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      );
    });

    it('doesnt render a screen', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('passes the gameState to the Transition Screen', () => {
      expect(wrapper.find('TransitionScreen').prop('gameState')).toBe(GameState.Run);
    });
  });

  describe('when the game is in start state', () => {
    beforeEach(() => {
      store = storeCreator({
        ...mockState,
        gameState: GameState.Start,
      });

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      );
    });

    it('renders the start screen', () => {
      expect(wrapper.find('Start')).toMatchSnapshot();
    });

    describe('when user clicks play', () => {
      beforeEach(() => {
        (startGameThunk as jest.Mock) = jest.fn(startGame);

        const onPlayClick = wrapper.find('Start').prop<noop>('onPlayClick');

        onPlayClick();
      });

      it('dispatches the start game thunk action', () => {
        expect(startGameThunk).toHaveBeenCalled();
        expect(store.getActions()).toContainEqual(startGame());
      });
    });
  });

  describe('when the game is in end state', () => {
    beforeEach(() => {
      store = storeCreator({
        ...mockState,
        gameState: GameState.GameOver,
      });

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      );
    });

    it('renders the end screen', () => {
      expect(wrapper.find('GameOver')).toMatchSnapshot();
    });

    describe('when user clicks play', () => {
      beforeEach(() => {
        (startGameThunk as jest.Mock) = jest.fn(startGame);

        const onPlayClick = wrapper.find('GameOver').prop<noop>('onPlayClick');

        onPlayClick();
      });

      it('dispatches the start game thunk action', () => {
        expect(startGameThunk).toHaveBeenCalled();
        expect(store.getActions()).toContainEqual(startGame());
      });
    });
  });
});
