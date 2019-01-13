jest.mock('../../common/util')

import { mount, ReactWrapper } from 'enzyme'
import React from 'react'
import TransitionScreen from './TransitionScreen'
import { Provider } from 'react-redux'
import { startGame, startGameThunk } from '../../store/actions'
import { createTestStore, MockStore } from '../../common/testhelpers'

type noop = () => void

describe('<TransitionScreen />', () => {
  let wrapper: ReactWrapper
  let store: MockStore

  describe('when the game is running', () => {
    beforeEach(() => {
      store = createTestStore({
        gameState: 'Run',
      })

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      )
    })

    it('doesnt render a screen', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('passes the gameState to the Transition Screen', () => {
      expect(wrapper.find('TransitionScreen').prop('gameState')).toBe('Run')
    })
  })

  describe('when the game is in start state', () => {
    beforeEach(() => {
      store = createTestStore({
        gameState: 'Start',
      })

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      )
    })

    it('renders the start screen', () => {
      expect(wrapper.find('Start')).toMatchSnapshot()
    })

    describe('when user clicks play', () => {
      beforeEach(() => {
        (startGameThunk as jest.Mock) = jest.fn(startGame)

        const onPlayClick = wrapper.find('Start').prop<noop>('onPlayClick')

        onPlayClick()
      })

      it('dispatches the start game thunk action', () => {
        expect(startGameThunk).toHaveBeenCalled()
        expect(store.getActions()).toContainEqual(startGame())
      })
    })
  })

  describe('when the game is in end state', () => {
    beforeEach(() => {
      store = createTestStore({
        gameState: 'GameOver',
      })

      wrapper = mount(
        <Provider store={store}>
          <TransitionScreen />
        </Provider>,
      )
    })

    it('renders the end screen', () => {
      expect(wrapper.find('GameOver')).toMatchSnapshot()
    })

    describe('when user clicks play', () => {
      beforeEach(() => {
        (startGameThunk as jest.Mock) = jest.fn(startGame)

        const onPlayClick = wrapper.find('GameOver').prop<noop>('onPlayClick')

        onPlayClick()
      })

      it('dispatches the start game thunk action', () => {
        expect(startGameThunk).toHaveBeenCalled()
        expect(store.getActions()).toContainEqual(startGame())
      })
    })
  })
})
