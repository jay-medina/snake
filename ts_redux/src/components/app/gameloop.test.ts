import { createTestStore, MockStore } from '../../common/testhelpers'
import { startLoop } from './gameloop'
import { startGame, tickForward } from '../../store/actions'
import { TimeStamp } from '../../common/types'

type Step = (timestamp: TimeStamp) => void

describe('startLoop', () => {
  let store: MockStore
  let stepFn: Step

  beforeEach(() => {
    window.requestAnimationFrame = jest.fn((step) => (stepFn = step))
    store = createTestStore()
  })

  it('subscribes to the store', () => {
    jest.spyOn(store, 'subscribe')
    startLoop(store)
    expect(store.subscribe).toHaveBeenCalledWith(expect.any(Function))
  })

  describe('when the game start action is invoked', () => {
    beforeEach(() => {
      startLoop(store)
      store.dispatch(startGame())
    })

    it('starts the game loop', () => {
      expect(window.requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function))
    })

    describe('when the game start action is invoked twice', () => {
      it('only starts the game loop once', () => {
        store.dispatch(startGame())
        expect(window.requestAnimationFrame).toHaveBeenCalledTimes(1)
      })
    })

    describe('when animation callback fires', () => {
      const timestamp = 10
      beforeEach(() => {
        stepFn(timestamp)
      })

      it('dispatches a TICK_TIME action', () => {
        expect(store.getActions()).toContainEqual(tickForward(timestamp))
      })

      it('requests the animation frame again', () => {
        expect(window.requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function))
        expect(window.requestAnimationFrame).toHaveBeenCalledTimes(2)
      })
    })
  })
})
