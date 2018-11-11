import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import configureStore, {
  MockStoreCreator,
  MockStoreEnhanced,
} from 'redux-mock-store';
import { GameState, AppState } from '../store/util';
import TransitionScreen from './TransitionScreen';
import { Provider } from 'react-redux';
import { startGame } from '../store/actions';

describe('<TransitionScreen />', () => {
  let wrapper: ReactWrapper;
  let mockStore: MockStoreCreator<AppState>;
  type noop = () => void;

  beforeEach(() => {
    mockStore = configureStore();
  });

  describe('when the game is running', () => {
    let store: MockStoreEnhanced<AppState>;

    beforeEach(() => {
      store = mockStore({
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
      expect(wrapper.find('TransitionScreen').prop('gameState')).toBe(
        GameState.Run,
      );
    });
  });

  describe('when the game is in start state', () => {
    let store: MockStoreEnhanced<AppState>;

    beforeEach(() => {
      store = mockStore({
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
      it('dispatches the start game action', () => {
        const onPlayClick = wrapper.find('Start').prop<noop>('onPlayClick');

        onPlayClick();
        expect(store.getActions()).toEqual([startGame()]);
      });
    });
  });

  describe('when the game is in end state', () => {
    let store: MockStoreEnhanced<AppState>;

    beforeEach(() => {
      store = mockStore({
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
      it('dispatches the start game action', () => {
        const onPlayClick = wrapper.find('GameOver').prop<noop>('onPlayClick');

        onPlayClick();
        expect(store.getActions()).toEqual([startGame()]);
      });
    });
  });
});
