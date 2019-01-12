import { TimeStamp, GameStore } from '../../common/types'
import { tickForwardThunk } from '../../store/actions'

function loop(store: GameStore) {
  function step(timestamp: TimeStamp) {
    store.dispatch(tickForwardThunk(timestamp))

    requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function startLoop(store: GameStore) {
  let started = false

  const gameloop = () => {
    if (started) return

    started = true

    loop(store)
  }

  store.subscribe(gameloop)
}
