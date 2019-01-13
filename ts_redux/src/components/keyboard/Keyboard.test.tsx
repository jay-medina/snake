import React from 'react';
import { MockStore, createTestStore } from '../../common/testhelpers';
import { ReactWrapper, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Keyboard from './Keyboard';
import { updateSnakeDirection } from '../../store/actions';

describe('Keyboard', () => {
  let wrapper: ReactWrapper;
  let store: MockStore;
  let child: JSX.Element;
  let keydownFn: (e: { keyCode: number }) => void;

  beforeEach(() => {
    window.addEventListener = jest.fn((_, cb) => (keydownFn = cb));
    window.removeEventListener = jest.fn();
    store = createTestStore();
    child = <div>hello</div>;

    wrapper = mount(
      <Provider store={store}>
        <Keyboard>{child}</Keyboard>
      </Provider>,
    );
  });

  describe('on render', () => {
    it('displays whatever that is passed', () => {
      expect(wrapper.contains(child)).toBe(true);
    });
  });

  describe('on mount', () => {
    it('wires a keydown listener on the window', () => {
      expect(window.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
    });
  });

  describe('on unmount', () => {
    it('removes the keydown listener', () => {
      wrapper.unmount();
      expect(window.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
    });
  });

  describe('when user types a key', () => {
    it('doesnt dispatch the action for an allowed key', () => {
      keydownFn({ keyCode: 12 });
      expect(store.getActions()).toEqual([]);
    });

    it('updates the snake direction: up', () => {
      keydownFn({ keyCode: 38 });
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('up'));
    });

    it('updates the snake direction: down', () => {
      keydownFn({ keyCode: 40 });
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('down'));
    });

    it('updates the snake direction: left', () => {
      keydownFn({ keyCode: 37 });
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('left'));
    });

    it('updates the snake direction: right', () => {
      keydownFn({ keyCode: 39 });
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('right'));
    });
  });
});
