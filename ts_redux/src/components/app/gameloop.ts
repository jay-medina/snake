import { Store } from 'redux'
import { AppState, TimeStamp } from '../../common/types'
import { AppAction, tickForward } from '../../store/actions'

function loop(store: Store<AppState, AppAction>) {
  function step(timestamp: TimeStamp) {
    store.dispatch(tickForward(timestamp))

    requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function startLoop(store: Store<AppState, AppAction>) {
  let started = false

  const gameloop = () => {
    if (started) return

    started = true

    loop(store)
  }

  store.subscribe(gameloop)
}
