import React from 'react';
import { MockStore, createTestStore } from '../../common/testhelpers';
import { ReactWrapper, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Keyboard from './Keyboard';
import { updateSnakeDirection } from '../../store/actions';
import { act } from 'react-dom/test-utils';

describe('Keyboard', () => {
  let wrapper: ReactWrapper;
  let store: MockStore;
  let child: JSX.Element;

  afterEach(() => {
    wrapper && wrapper.unmount();
  });

  beforeEach(() => {
    jest.spyOn(document.body, 'addEventListener');
    jest.spyOn(document.body, 'removeEventListener');
    store = createTestStore();
    child = <div>hello</div>;

    act(() => {
      wrapper = mount(
        <Provider store={store}>
          <Keyboard>{child}</Keyboard>
        </Provider>,
      );
    });
  });

  describe('on render', () => {
    it('displays whatever that is passed', () => {
      expect(wrapper.contains(child)).toBe(true);
    });
  });

  describe('on mount', () => {
    it('wires a keydown listener on the body', () => {
      expect(document.body.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
    });
  });

  describe('on unmount', () => {
    it('removes the keydown listener', () => {
      expect(document.body.removeEventListener).toHaveBeenCalledWith(
        'keydown',
        expect.any(Function),
      );
    });
  });

  describe('when user types a key', () => {
    it('doesnt dispatch the action for an allowed key', () => {
      dispatchKeydownEvent(12);
      expect(store.getActions()).toEqual([]);
    });

    it('updates the snake direction: up', () => {
      dispatchKeydownEvent(38);
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('up'));
    });

    it('updates the snake direction: down', () => {
      dispatchKeydownEvent(40);
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('down'));
    });

    it('updates the snake direction: left', () => {
      dispatchKeydownEvent(37);
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('left'));
    });

    it('updates the snake direction: right', () => {
      dispatchKeydownEvent(39);
      const actions = store.getActions();
      expect(actions).toContainEqual(updateSnakeDirection('right'));
    });
  });
});

function dispatchKeydownEvent(keyCode: number) {
  class MyEvent extends KeyboardEvent {
    get keyCode() {
      return keyCode;
    }
  }

  document.body.dispatchEvent(new MyEvent('keydown'));
}
